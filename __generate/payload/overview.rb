module PayloadOverview
    def self.generate( path_struct, path_payload )
        result = File.read( './struct/payload.txt' )

        inserts = {
            hash: nil,
            json: nil 
        }

        file = File.read( path_struct )
        tmp = JSON.parse( file ).with_indifferent_access.pretty_inspect
            .gsub( '"', '<-->' )
            .gsub( "<-->", "'" )
            .gsub( '=>', ' => ')
        inserts[:hash] = "payload = {\n" + tmp[ 1, tmp.length ]

        tmp = JSON.pretty_generate( file )
            .gsub( '\n', "\n" )
            .gsub( '\"', '"' )
        inserts[:json] = tmp[ 1, tmp.length-2 ]

        inserts.each do | key, value | 
            # _in = "payload = {\n" + value[ 1, value.length ]
            result = result.gsub( "{{#{key}}}", value ) 
        end

        File.open( '../payload/README.md', "w" ) { | f | f.write( result ) }

        return true
    end
end