module OptionDetail
  def self.generate( options, sites, meta, output )
    files = [
      [ :example, './struct/options_detail_example.txt' ],
      [ :main, './struct/options_detail_main.txt' ]
    ]

    templates = files
      .inject( {} ) { | item, file |  
        item[ file[ 0 ] ] = File.read( file[ 1 ] ); item 
      }

    categories = self.sites_create( sites )
    prepares = self.payloads_prepare( categories, options, sites, meta )
    
    prepares.each.with_index do | p, index |
      prepare = prepares[ index ]
      path = "#{output}#{prepare[:title]}.md"
      md = self.template_insert_values( templates, prepare )
      File.open( path, "w" ) { | f | f.write( md ) }
    end

    return true
  end


  def self.payloads_prepare( categories, options, sites, meta )
    sort = 0
    payloads = []
    categories.keys.each.with_index do | category, index_row |
      categories[ category ].each.with_index do | key, index_column |
        sort += 1
        payload = payload_prepare( 
            sort, 
            index_row,
            index_column,
            category, 
            key, 
            options, 
            sites, 
            meta 
        )
        
        payloads.push( payload )
      end
    end
    
    return payloads
  end


  def self.sites_create( sites )
    categories = sites.keys
        .map { | key | key.to_s.split( '__' ).first.to_sym }.to_set.to_a
        .inject( {} ) { | item, k | item[ k ] = []; item }

    sites.each { | k, v | categories[ k.to_s.split( '__' ).first.to_sym ].push( k ) }
    return categories
  end
  

  private


  def self.print_gsubs( templates )
      puts "TEMPLATES"
      templates.each do | key, value |
        gsubs = templates[ key ]
          .scan( /\{\{([^\{]*)\}\}/ )
          .inject( {} ) { | item, key | item[ key[ 0 ].to_sym ] = nil; item }
        puts "  :#{key}"
        gsubs.each { | k, v | puts "    :#{k}"}  
        puts
      end
      return true
    end
    
    
  def self.get_value( key, data, drop )
    keys = key.to_s.split( '__' ).map { | a | a.to_sym }
    drop ? keys = keys.drop( 1 ) : ''
    case keys.length
      when 1
        params = data[ keys[ 0 ] ]
      when 2
        params = data[ keys[ 0 ] ][ keys[ 1 ] ]
      when 3
        params = data[ keys[ 0 ] ][ keys[ 1 ] ][ keys[ 2 ] ]
      when 4
        params = data[ keys[ 0 ] ][ keys[ 1 ] ][ keys[ 2 ] ][ keys[ 3 ] ]
      when 5
        params = data[ keys[ 0 ] ][ keys[ 1 ] ][ keys[ 2 ] ][ keys[ 3 ] ][ keys[ 4 ] ]
    end
    return params
  end
    
        
  def self.payload_prepare( sort, index_row, index_column, category, key, options, sites, meta )
    alphabet = ( 'A'..'Z' ).to_a
    letter = alphabet[ index_row ]
    letter_with_number = "#{letter}.#{index_column+1}"
    
    struct_main = {
      sort: nil,
      title_with_number: nil,
      title: nil,
      description: nil,
      default_image: nil,
      option: nil,
      key: nil,
      category: nil,
      category_url: nil,
      section: nil,
      section_url: nil,
      value_regex_description: nil,
      value_default: nil,
      value_regex: nil,
      value_class: nil,
      examples: []
    }

    struct_example = {
      name_with_index: nil,
      description: nil,
      output_image: nil,
      output_description: nil,
      path: nil,
      path_class: nil,
      payload: nil,
      payload_class: nil,
      options: nil,
      options_class: nil,
      code: nil,
      ruby: nil,
      section: nil,
      file: nil
    }
    
    payload = struct_main.clone()
    
    value = get_value( key, options, false )

    tmp = {}
    tmp[ key ] = value
    tmp = tmp.pretty_inspect 
    payload[:option] = "{\n " + tmp[ 1, tmp.length-3 ].gsub( '=>', ' => ' ) + "\n}"
 
    value_type = value.class.to_s
    [ 'TrueClass', 'FalseClass' ].include?( value_type ) ? value_type = 'Boolean' : ''

    value_type.eql?( 'Symbol' ) ? value = ":#{value}" : ''
    value_type.eql?( 'String' ) ? value = "\"#{value}\"" : ''
    
    #value_type.eql?( 'Array' ) ? value = value : ''
    #[:order].include?( key )  ? puts( value ) : ''   
    #value_type.eql?( 'Hash' ) ? value = value : ''

    value_regex = meta[:regexs].find { | a | a[:name].eql? value_type }
    
    payload[:sort] = sort
    payload[:title] = key.to_s
    payload[:title_with_number] = "#{letter_with_number} #{payload[:title]}"
    payload[:description] = sites[ key ][:description]

    payload[:default_image] = "../assets/images/sections/#{sites[ key ][:section]}.png"

    payload[:key] = ":#{key}"
    payload[:category] = category.to_s.titleize
    payload[:category_url] = "./\##{category.downcase}"
    payload[:section] = "#{sites[ key ][:section].to_s.titleize}"


    if sites[ key ][:section].eql?( :all )
      payload[:section_url] = '../sections/'
    else
      payload[:section_url] = "/sections/#{sites[ key ][:section]}"
    end

    payload[:value_regex_description] = value_regex[:description]
    payload[:value_default] = value
    payload[:value_regex] = value_regex[:regex]
    payload[:value_class] = value_type

    key.to_s.eql?( 'sections__four__snippet' ) ? dd = true : dd = false
    payload[:examples] = sites[ key ][:examples].map.with_index do | item, index |
      example = struct_example.clone()

      example[:name_with_index] = "Example #{alphabet[ index ]}."
      example[:description] = item[:description]

      example[:output_image] = "../assets/images/options/#{key}--#{alphabet[index].downcase}.png"
      example[:output_description] = nil
      example[:path] = "'my-invoice.pdf'"
      example[:path_class] = 'String'
      example[:payload] = '{...} [see Payload](../payload)'
      example[:payload_class] = 'hash'

      tmp = item[:options].pretty_inspect
      example[:options] = "{\n " + tmp[ 1, tmp.length-3 ].gsub( '=>', ' => ' ) + "\n}"
      example[:options_table] = item[:options].pretty_inspect.gsub( "\n", "" ).gsub( '=>', ' => ' )
 
      example[:options_class] = 'hash'
      example[:ruby] = item[:options]
      example[:section] = sites[ key ][:section]
      example[:file] = "#{key}--#{alphabet[ index ].downcase}.png"
 
      example[:code] = <<-EOS
require 'write_invoice'
 
pyld = WriteInvoice::Example.generate()
opts = #{example[:options]}
 
WriteInvoice::Document.generate( output: #{example[:path]}, payload: pyld, options: opts )
  EOS
      example
    end
 
    return payload
  end
    

  def self.template_insert_values( templates, payload )
    main = payload.clone()
    main.delete( :examples )
    examples = payload[:examples]

    str = ""
    tmp = templates[:main].clone()
    main.each { | k, v | tmp.gsub!( k.to_s.insert( 0, "{{" ).concat( "}}" ), v.to_s ) }
    str += tmp

    examples.each do | example |
        tmp = ""
        tmp += templates[:example].clone()
        example.each { | k, v | tmp.gsub!( k.to_s.insert( 0, "{{" ).concat( "}}" ), v.to_s ) }
        str += tmp
    end

    return str
  end
end