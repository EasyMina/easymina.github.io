root_module = Dir.pwd.split( '2021-10-16--write-invoice-documentation' ).first
root_doc = Dir.pwd.split( '__generate' ).first

require 'mini_magick'
require 'json'
require 'active_support/core_ext/hash'
require 'fileutils'
require 'pp'
require 'fileutils'

require "#{root_module}2021-06-27--generate-invoice/4/write_invoice/lib/write_invoice.rb"
require './struct/blocks.rb'
require './options/detail.rb'
require './options/overview.rb'
require './sections/image.rb'
require './sections/detail.rb'
require './sections/overview.rb'
require './payload/overview.rb'

options = WriteInvoice::Document.get_options()

sites = Blocks.options()
meta = Blocks.meta()
sections = Blocks.sections()
payloads = Blocks.payloads()
 
#sections_keys = sites.map { | a | a[ 1 ][:section] }.to_set.to_a
#puts sections_keys

generate = {
  struct: false,
  payload: true,
  options: true,
  images_sections: true,
  images_options: true,
  sections: true
}

path_struct = 'struct/payload.json'
path_payload = "#{root_doc}/payload/"
path_options = "#{root_doc}/options/"
path_assets = "#{root_doc}/assets/"
path_sections = "#{root_doc}/sections/"
path_preview = "#{root_doc}assets/images/template/"
path_options_asset = "#{root_doc}assets/images/options/"

path_files = './files/'
path_tmp = "#{path_files}tmp/"
path_pdf = "#{path_tmp}invoice.pdf"

generate.each do | key |
  if key[ 1 ]
    case key[ 0 ]
      when :struct
        puts '> STRUCT'
        payload = WriteInvoice::Example.generate( invoices_total: 1..1, articles_total: 2..2 )
        File.open( path_struct, 'w' ) { | f | f.write( JSON.pretty_generate( payload ) ) }
      when :payload
        puts '> PAYLOAD'
        PayloadOverview.generate( path_struct, path_payload )
      when :options
        puts '> OPTIONS'
        OptionOverview.generate( sites, options, path_options )
        OptionDetail.generate( options, sites, meta, path_options )
      when :images_sections
        puts '> IMAGES SECTIONS'
        file = File.read( path_struct )
        payload = JSON.parse( file ).with_indifferent_access
        opts = {
          show__unencrypted: true,
          show__logo: true,
          headline__image__src: "#{root_doc}__generate/files/templates/logo.png"
        }

        WriteInvoice::Document.generate( output: path_pdf, payload: payload, options: opts, debug: false )
        SectionImage.image_convert( path_pdf, path_tmp )
        SectionImage.image_overlay( path_files, 'overlay-examples.png', path_preview )
        SectionImage.images_crops( sections.keys, path_tmp, path_assets )
      when :images_options
        puts '> IMAGES OPTIONS'
        file = File.read( path_struct )
        payload = JSON.parse( file ).with_indifferent_access
        SectionImage.option_images( sites, payload, path_pdf, path_tmp, path_options_asset, root_doc )
      when :sections
        puts '> SECTIONS'
        categories = OptionDetail.sites_create( sites )
        ps = OptionDetail.payloads_prepare( categories, options, sites, meta )
        SectionDetail.generate( ps, sites, options, sections, path_sections )
        SectionOverview.json( ps, sites, sections, options, payloads, path_assets, path_struct )
    else
    end
  end
end