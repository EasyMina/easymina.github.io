module SectionOverview
    def self.generate( sections )
    end


    def self.json( ps, sites, sections, options, payloads, path, payload_path )
        sections = sections.keys.inject( {} ) do | item, key | 
            item[ key ] = sections[ key ][:crop].split( '+' ).last.to_i
            item[ key ] =  ( 849 * item[ key ] ) / 3509
            item
        end

        opts =  sites
            .map { | k, v | v[:self] = k; v }
            .select { | v | v.keys.include?( :position ) }
            .inject( [] ) { | items, a | 
                nr = ps
                    .find { | b | b[:key].eql?( ":#{a[:self]}") }[:title_with_number]
                    .split( ' ' )
                    .first

                value = self.get_value( a[:self], options, false)
                value.class.to_s.eql?( 'Symbol' ) ? value = ":#{value}" : ''

                item = { 
                    name: a[:self].to_s,
                    type: 'option',
                    nr: nr,
                    value: value,
                    position: a[:position],
                    section: a[:section],
                    selector: a[:selector]
                }

                case a[:position][ 0 ].class.to_s
                when 'Integer'
                    item[:position] = a[:position]
                    items.push( item )
                when 'Array'
                    a[:position].each do | pos |
                        item[:position] = pos.clone
                        items.push( item.clone )
                    end
                else

                end

                items
            }
            

        # puts payload_path
        file = File.read( payload_path )
        pp = JSON.parse( file ).with_indifferent_access
        # puts payloads

        pays = payloads
            .map { | k, v | v[:self] = k; v}
            .select { | v | v.keys.include?( :position ) }
            .inject( [] ) { | items, a | 
                # puts a[:self].to_s
                item = { 
                    name: a[:self].to_s.split('__').join( ' >> '),
                    type: 'payload',
                    nr: 'nr',
                    value: self.get_value( a[:self], pp['invoices'][ 0 ], false),
                    position: a[:position],
                    section: a[:section],
                    selector: a[:selector]
                }

                case a[:position][ 0 ].class.to_s
                when 'Integer'
                    item[:position] = a[:position]
                    items.push( item )
                when 'Array'
                    a[:position].each do | pos |
                        item[:position] = pos.clone
                        items.push( item.clone )
                    end
                else

                end

                items        
            }

        data = { 
            sections: sections,
            options: opts.concat( pays )
        } 

        path = "#{path}other/sections.json"
        str = "#{JSON.pretty_generate( data )}"

        File.open( path, 'w' ) { | f | f.write( str ) }
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
end