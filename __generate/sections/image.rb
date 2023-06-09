module SectionImage
    def self.generate( path_pdf, path_tmp )
        self.image_convert( path_pdf, path_png )
        self.image_crop( overlay, section, example )
    end


    def self.image_convert( path_pdf, path_tmp )
        path_png = "#{path_tmp}invoice.png"

        p = MiniMagick::Image.open path_pdf
        MiniMagick::Tool::Convert.new do | convert |
            convert.background 'white'
            convert.flatten
            convert.density 300
            convert.quality 100
            convert << p.pages.first.path
            convert << "png32:#{path_png}"
        end 

        return true
    end


    def self.image_overlay( path_files, overlay_name, path_preview )
        path_png = "#{path_files}tmp/invoice.png"
        overlay = "#{path_files}templates/#{overlay_name}"
        output = "#{path_files}tmp/invoice-w-overlay.png"
puts 'test'

puts "from: #{path_png}"
puts "to: #{path_preview}preview--w-mask.png"

first_image = MiniMagick::Image.open path_png
MiniMagick::Tool::Convert.new do | convert |
    convert.density 72
    convert.quality 100
    convert.resize 600
    convert << first_image.pages.first.path
    convert << "png8:#{path_preview}preview--wo-mask.png"
end

# FileUtils.cp( path_png, "#{path_preview}preview--w-mask.png" )
# FileUtils.cp( path_png, "#{path_preview}preview--wo-mask.png" )
=begin

        first_image = MiniMagick::Image.open path_png
        overlay = MiniMagick::Image.open overlay

        result = first_image.composite( overlay ) do | convert |
            convert.alpha 'on'
            convert.compose 'Over'
            convert.geometry '+00+00'
        end

        result.write output

        png = MiniMagick::Image.open "#{output}"
        MiniMagick::Tool::Convert.new do | convert |
            convert.background 'white'
            convert.flatten
            convert.density 300
            convert.quality 100
            convert.resize 600
            convert << png.pages.first.path
            convert << "png8:#{path_preview}preview--w-mask.png"
        end

        MiniMagick::Tool::Convert.new do | convert |
            convert.background 'white'
            convert.flatten
            convert.density 300
            convert.quality 100
            convert.resize 600
            convert << first_image.pages.first.path
            convert << "png8:#{path_preview}preview--wo-mask.png"
        end
=end

        return true
    end


    def self.image_crop( path_tmp, file_name_in, path_output, file_name_out, section )
        sections = {
            header: '0x570! +000+000',
            two: '0x390! +000+530',
            three: '0x390! +000+880',
            four: '0x290! +000+1220',
            five: '0x460! +000+1450',
            six: '0x580! +000+1850',
            seven: '0x215! +000+2350',
            eight: '0x645! +000+2500',
            footer: '0x645! +000+3080',
            all: '0x0! +000+0000'
        }

        png = MiniMagick::Image.open "#{path_tmp}#{file_name_in}"

        MiniMagick::Tool::Convert.new do | convert |
            convert.background 'white'
            convert.flatten
            convert.density 300
            convert.quality 100
            convert.crop sections[ section ]
            convert.resize 600
            convert << png.pages.first.path
            convert << "png8:#{path_output}#{file_name_out}"
        end
    end


    def self.images_crops( sections, path_tmp, path_assets )
        sections.push( :all )
        sections = sections.to_set.to_a
        sections.each do | section |
            self.image_crop( 
                path_tmp, 
                'invoice.png', 
                "#{path_assets}images/sections/", 
                "#{section}.png", 
                section
            )
        end
    end


    def self.option_images( sites, payload, path_pdf, path_tmp, path_options_asset, root_doc )
        keys = sites.keys

        for index in 0..keys.length - 1
        #sites.keys.each.with_index do | key, index |
            key = keys[ index ]
            print " [#{index}]  #{key}: "
            self.option_image( key, sites, payload, path_pdf, path_tmp, path_options_asset, root_doc )
            puts
        end

        return true
    end


    def self.option_image( key, sites, payload, path_pdf, path_tmp, path_options_asset, root_doc )
        sections = {
            header: '0x570! +000+000',
            two: '0x390! +000+530',
            three: '0x390! +000+880',
            four: '0x290! +000+1220',
            five: '0x460! +000+1450',
            six: '0x580! +000+1850',
            seven: '0x215! +000+2350',
            eight: '0x645! +000+2500',
            footer: '0x645! +000+3080',
            all: '0x0! +000+0000'
        }

        alphabet = ( 'a'..'z' ).to_a
        section = sites[ key ][:section]

        sites[ key ][:examples].each.with_index do | example, index |
            c = alphabet[ index ]
            print "#{c}. "

            if example[:options].keys.include?( :headline__image__src )
                example[:options][:headline__image__src] = 
                    example[:options][:headline__image__src].gsub( '<<--ROOT-->', root_doc )
            end

            if example[:options].keys.include?( :style__font__family )

                r = root_doc.split( 'PROJEKTE' ).first
                b = example[:options][:style__font__family].keys[ 0 ]

                [ :normal, :italic, :bold, :bold_italic ].each do | a |
                    example[:options][:style__font__family][ b ][ a ] = 
                        example[:options][:style__font__family][ b ][ a ]
                            .gsub( '~', r )
                end
            end
            # print "#{payload['items']['articles'][ 0 ]['total']} "
            WriteInvoice::Document.generate( output: path_pdf, payload: payload, options: example[:options], debug: false )
            # print "#{payload['items']['articles'][ 0 ]['total']} "

            self.image_convert( path_pdf, path_tmp )

            png = MiniMagick::Image.open "#{path_tmp}invoice.png"
            MiniMagick::Tool::Convert.new do | convert |
                convert.background 'white'
                convert.flatten
                convert.density 300
                convert.quality 100
                convert.crop sections[ section ]
                convert.resize 600
                convert << png.pages.first.path
                convert << "png8:#{path_options_asset}#{key}--#{c}.png"
            end
        end
        
        return true
    end
end