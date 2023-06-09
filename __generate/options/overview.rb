module OptionOverview
    def self.generate( sites, options, output )
        categories = sites.keys
            .map { | a | a.to_s.split( '__' ) }
            .inject( {} ) { | item, spl | 
                item.keys.include?( spl[ 0 ].to_sym ) ? '' : item[ spl[ 0 ].to_sym ] = []
                item[ spl[ 0 ].to_sym ].push( spl.join( '__' ).to_sym )
                item
            }

        md = <<EOS
---
sort: 4
title: Options
---

# Options
        
EOS

        md += self.table( categories, options, sites )
        path = "#{output}README.md"
        File.open( path, "w" ) { | f | f.write( md ) }
    end


    private


    def self.table( categories, options, sites )
        tables = {}
        alphabet = 'A'.upto( 'Z' ).to_a

        categories.keys.each.with_index do | category, index |
            char = alphabet[ index ]
            str = ''
            str += "| **Nr** | **Name** | **Key** | **Default** | **Examples** | **Description** |\n" 
            str += "| :-- | :-- | :-- | :-- | :-- | :-- |\n"
            categories[ category ].each.with_index do | key, index |
                nr = "#{char}.#{index + 1}."
                name = key
                    .to_s
                    .split( '__' )
                    .drop( 1 )
                    .map { | a | a[ 0, 1 ].upcase + a[ 1, a.length ] }
                    .join( ' ' )
                default = self.pick_values( key, options )
                type = default.class.to_s
                [ 'TrueClass', 'FalseClass'].include?( type ) ? type = 'Boolean' : ''
                type.eql?( 'String' ) ? default = "\"#{default}\"" : ''
                type.eql?( 'Symbol' ) ? default = ":#{default}" : ''
                default = "`#{default}`"
                name = name.gsub( '_', ' ' ).titleize
                name = "[#{name}](./#{key})" 
                nr = "[#{nr}](./#{key})" 

                examples = sites[ key ][:examples]
                    .map.with_index { | a, index | 
                        "[#{alphabet[ index ].upcase}](#{key}\#example-#{alphabet[ index ].downcase})"     
                    }
                    .join( ', ' )
 
                
                deny = [ :sections__one__name, :sections__two__to ]
                if !deny.include? key
                    str += "| #{nr} | #{name} | :#{key} | #{default} | #{examples} | #{sites[ key ][:description]} |\n"
                else
                    #puts 'test'
                end
            end
            tables[ category ] = str
        end
      
      
        
        str = <<EOS

```ruby
require 'write_invoice'

pyld = WriteInvoice::Example.generate()
WriteInvoice::Document.generate( output: 'test.pdf', payload: pyld, options: {}, debug: true)
```

| Name | Type| Default | Required |
| :-- | :-- | :-- | :-- |
| `output:` | String | `nil` | no | 
| `payload:` | Hash | `{}` | yes |
| `options:` | Hash | `{}` | no |
| `debug:` | Boolean | `true` | yes | 

## Preview

<div >
    <canvas id="canvas" search="" palette="option_overview"></canvas>
</div>
<script src="../assets/js/marker.js"></script>

EOS

        str += "## Categories\n"
        tables.keys.each.with_index do | key |
            name = key.to_s
            name = name[ 0, 1 ].upcase + name[ 1, name.length ] 
            str += "### " + name + "\n\n"
            str += tables[ key ]
            str += "\n\n"
        end
        str = str[ 0, str.rindex("\n\n\n")]
    end


    def self.pick_values( pick, params )
        keys = pick
          .to_s
          .split( '__' )
          .map{ | a | a.to_sym }
        result = nil
        case( keys.length)
            when 1
                result = params[ keys[ 0 ] ]
            when 2
                result = params[ keys[ 0 ] ][ keys[ 1 ] ]
            when 3
                result = params[ keys[ 0 ] ][ keys[ 1 ] ][ keys[ 2 ] ]
            when 4
                result = params[ keys[ 0 ] ][ keys[ 1 ] ][ keys[ 2 ] ][ keys[ 3 ] ]
        end
    
        return result
    end



end

