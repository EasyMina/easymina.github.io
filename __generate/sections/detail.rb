module SectionDetail
  def self.generate( ps, sites, options, sections, path_sections )
    alphabet = 'A'.upto( 'Z' ).to_a
    template = File.read( './struct/sections_detail.txt'  )

    strs = ''
    sections.keys.each.with_index do | key, column |
      section = sections[ key ]
      file_name, strs = self.single( ps, sites, options, column, alphabet, section, key, template )

      File.open( "#{path_sections}#{file_name}", 'w' ) { | f | f.write( strs ) }
    end

  end

 
  def self.single( ps, sites, options, column, alphabet, section, key, template )
    struct = {
      sort: nil,
      title_with_number: nil,
      title: nil,
      section: nil,
      overview_image: nil,
      section_image: nil,
      table: nil
    }

    alpha = alphabet[ column ]
    title = key.to_s.titleize

    struct[:sort] = column + 1
    struct[:title_with_number] = "#{alpha}. #{title}"
    struct[:title] = "Section: #{title}"
    struct[:section] = title.downcase
    struct[:description] = section[:description] 
    struct[:overview_image] = "/assets/images/sections/all.png"
    struct[:section_image] = "/assets/images/sections/#{key}.png"

    founds = ps.select { | payload | payload[:section].downcase.to_sym.eql? key }

    str = ""
    str += "| **Nr** | **Name** | **Key** | **Default** | **Description** |\n"
    str += "| :--- | :--- | :--- | :--- | :--- |\n"

    founds.each.with_index do | found, row |
      _key = found[:key]
      name = found[:title].to_s.split( '__' ).map { | a | a.titleize }.join( ' ' )
      name = "[#{name}](/options/#{_key.gsub(':', '')})"

      k = found[:key].gsub( '"', '' ).gsub( ':', '' ).to_sym
      value = self.get_value( k, options, false )

      nr = found[:title_with_number].split( ' ' ).first
      nr = "[#{nr}](/options/##{ k.to_s.split( '__' ).first})"

      description = found[:description]

      str += "| #{nr} | #{name} | #{_key} | `#{value}` | #{description} |\n"
    end

    str += "\n\n"
    struct[:table] = str

    strs = template.clone
    struct.keys.each { | k | strs = strs.gsub( "{{#{k}}}", struct[ k ].to_s ) }
    
    file_name = "#{key}.md"
    path = ""
    return file_name, strs
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

