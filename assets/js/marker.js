function background_draw() {
    state['ctx'].lineWidth = 0
    state['ctx'].strokeStyle = "#000000";
    state['ctx'].fillStyle = hash['canvas']['fill']
    state['ctx'].fillRect( 0, 0, canvas.width, canvas.height )
    state['ctx'].translate( - hash['canvas']['offset']['x'], - hash['canvas']['offset']['y'] )

    state['ctx'].drawImage( 
        state['mapSprite'], 
        0, 
        0, 
        hash['canvas']['image']['width'], hash['canvas']['image']['height'] 
    )
    state['ctx'].translate( + hash['canvas']['offset']['x'], + hash['canvas']['offset']['y'] )
}


function sections_draw() {
    Object.keys( data['sections'] )
        .forEach( ( key, index ) => {
            state['ctx'].lineWidth = hash['sections']['stroke']['width']
            state['ctx'].strokeStyle = hash['sections']['stroke']['fill']
            state['ctx'].fillStyle = hash['sections']['fill']           

            state['ctx'].font = hash['sections']['font']['size'] + 'px ' + hash['sections']['font']['style']
            state['ctx'].moveTo( 
                0 - hash['canvas']['offset']['x'], 
                data['sections'][ key ] + 1 - hash['canvas']['offset']['y']
            )
            state['ctx'].lineTo( 
                canvas.width - hash['canvas']['offset']['x'], 
                data['sections'][ key ] + 1  - hash['canvas']['offset']['y']
            )

            state['ctx'].stroke()
            state['ctx'].fill()
            state['ctx'].save()

            state['ctx'].beginPath()
            l = state['ctx'].measureText( key ).width

            hh = data['viewports'].find( viewport => { return viewport['key'].includes( key ) } )

            state['ctx'].translate( 
                hash['sections']['font']['size'] - hash['canvas']['offset']['x'] ,  
                hh['middle'] - hash['canvas']['offset']['y'] 
            )

            state['ctx'].textAlign = 'center'
            state['ctx'].rotate( Math.PI * 1.5 )

            state['ctx'].fillText( 
                key, 
                0,
                0
            )

            state['ctx'].stroke()
            state['ctx'].fill()
            state['ctx'].restore()
    } )
}


function option_draw_arc( x, y, c ) {
    state['ctx'].beginPath()
    state['ctx'].arc(    
        x - hash['canvas']['offset']['x'], 
        y - hash['canvas']['offset']['y'], 
        hash['markers']['arc']['radius'], 
        0, 
        2 * Math.PI
    )

    state['ctx'].lineWidth = 0
    state['ctx'].strokeStyle = c
    state['ctx'].fillStyle = c

    state['ctx'].stroke()
    state['ctx'].fill()
}


function payload_draw_triangle( x, y, c ) {
    side = hash['markers']['triangle']['side']
    var h = side * ( Math.sqrt( 3 ) / 2 )

    state['ctx'].save()
    state['ctx'].translate( 
        x - hash['canvas']['offset']['x'], 
        y - hash['canvas']['offset']['y']
    )
  
    state['ctx'].beginPath()   
    state['ctx'].moveTo( 0, -h / 2 )
    state['ctx'].lineTo( -side / 2, h / 2 )
    state['ctx'].lineTo( side / 2, h / 2 )
    state['ctx'].lineTo( 0, -h / 2 )

    state['ctx'].lineWidth = 0
    state['ctx'].strokeStyle = c
    state['ctx'].fillStyle = c

    state['ctx'].stroke()
    state['ctx'].fill() 
    state['ctx'].save()
    state['ctx'].setTransform( 1, 0, 0, 1, 0, 0 )
}


function options_draw() {
    data['options'].forEach( option => {
        const x = option['position'][ 0 ]
        const y = option['position'][ 1 ]
        const c = hash['markers'][ option['palette'] ][ option['color'] ]

        switch( option['type'] ) {
            case 'option':
                option_draw_arc( x, y, c )
                break;
            case 'payload': 
                payload_draw_triangle( x, y, c )
        }  
    } )
}


function overlay_prepare( x, y, strs ) {
    const str_w = strs
        .map( str => { return state['ctx'].measureText( str ).width } )
        .reduce( ( a, b ) => { return ( a > b ) ? a : b } )

    const width_total = 
        hash['overlay']['padding']['left'] + str_w + hash['overlay']['padding']['right']

    let width_total_total = width_total +  
        hash['overlay']['triangle']['size'] + hash['overlay']['offset']['x']

    let r_width = 0
    let r_width_triangle_front = 0
    let r_width_triangle_back = 0
    let r_padding_left = hash['overlay']['padding']['left']

    if( ( x + width_total_total ) > hash['canvas']['image']['width'] ) {
        r_width = width_total_total + hash['overlay']['offset']['x']

        const tmp = hash['overlay']['offset']['x'] * 2
        r_width_triangle_front = tmp - hash['overlay']['triangle']['size']
        r_width_triangle_back = tmp + hash['overlay']['triangle']['size']
        r_padding_left = hash['overlay']['padding']['right']
    }

    let font_offsets = strs
        .map( str => {
            let metrics = state['ctx'].measureText( str )
            let actualHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent
            return actualHeight
        } )
        
    let font_offsets_space = Array( strs.length - 1 )
        .fill( hash['overlay']['font']['space'] )

    font_offsets_space.push( hash['overlay']['font']['space'] / 2 ) 

    let font_offsets_sum = font_offsets.reduce( ( a, b ) => a + b, 0 )
    let font_offsets_space_sum = font_offsets_space.reduce( ( a, b ) => a + b, 0 )

    const height_total = 
        hash['overlay']['padding']['top'] + hash['overlay']['padding']['bottom'] + font_offsets_sum + font_offsets_space_sum
    
    if( y < height_total / 2 ) {
        y = height_total / 2
    } else if( y > ( hash['canvas']['viewport']['height'] - height_total / 2 ) ) {
        y = hash['canvas']['viewport']['height'] - height_total / 2 
    }

    item = {
        'arrow': {
            'fill': hash['overlay']['colors']['background'],
            'move_to': {
                'x': x + hash['overlay']['offset']['x'] - r_width_triangle_front,
                'y': y
            },
            'line_tos' : [
                {
                    'x': x + hash['overlay']['triangle']['size'] + hash['overlay']['offset']['x'] - r_width_triangle_back,
                    'y': y + hash['overlay']['triangle']['size']
                },
                {
                    'x': x + hash['overlay']['triangle']['size'] + hash['overlay']['offset']['x'] - r_width_triangle_back,
                    'y': y - hash['overlay']['triangle']['size'] 
                }
            ]
        },
        'rect': {
            'fill': hash['overlay']['colors']['background'],
            'x': x + hash['overlay']['triangle']['size'] + hash['overlay']['offset']['x'] - r_width,
            'y': y - height_total / 2,
            'width': width_total, 
            'height': height_total
        },
        'text': {
            'fill': hash['overlay']['colors']['text'],
            'x': x + hash['overlay']['triangle']['size'] + hash['overlay']['offset']['x'] + r_padding_left - r_width,
            'y': y - ( height_total / 2 ) + hash['overlay']['font']['size'] + hash['overlay']['padding']['top']
        },
        'font_offsets': font_offsets
    }
    
    return item
}


function overlay_draw( item, strs ) {
    state['ctx'].beginPath()
    state['ctx'].fillStyle = item['arrow']['fill']

    state['ctx'].moveTo( item['arrow']['move_to']['x'], item['arrow']['move_to']['y'] )
    state['ctx'].lineTo( item['arrow']['line_tos'][ 0 ]['x'], item['arrow']['line_tos'][ 0 ]['y'] )
    state['ctx'].lineTo( item['arrow']['line_tos'][ 1 ]['x'], item['arrow']['line_tos'][ 1 ]['y'] )
    state['ctx'].fill()

    state['ctx'].beginPath()
    state['ctx'].fillRect( 
        item['rect']['x'], item['rect']['y'], 
        item['rect']['width'], 
        item['rect']['height'] 
    )

    state['ctx'].fillStyle = item['text']['fill']

    strs.forEach( ( str, index ) => {
        offset_font = item['font_offsets']
            .slice( 0, index )
            .reduce( ( a, b ) => a + b, 0 )

        spaces_font = Array( index )
            .fill( hash['overlay']['font']['space'] )
            .reduce( ( a, b ) => a + b, 0 )
        spaces_font = spaces_font - ( hash['overlay']['font']['space'] / 2 )

        state['ctx'].fillText( 
            str, 
            item['text']['x'], 
            item['text']['y'] + offset_font + spaces_font
        )
    } )
}


function overlay_hover( x, y ) {
    const result = {
        'hover' : false,
        'strs': [],
        'position': null,
        // 'key': null,
        'redirect': null
    }

    const found = data['bounding']
        .filter( b => {
            const xx = x > b['x']['from'] && x < b['x']['to']
            const yy = y > b['y']['from'] && y < b['y']['to']
            return xx && yy
        } )[ 0 ]

    if( typeof( found ) === 'object' ) {
        
        const option = data['options']
            .filter( opt => opt['name'] === found['self'])[ 0 ]

        const mode = typeof( option ) === 'undefined' ? 'viewport' : 'marker'
       
        if( mode === 'marker' ) {
            let strs = {
                'key': null,
                'value': null,
                'type': null
            }

            if( ( typeof option['value'] ) == 'string' && option['value'].startsWith( ':' ) ) { 
                value = option['value']
            } else {
                value = JSON.stringify( option['value'] )
                if( value.length > hash['overlay']['str_length'] ) {
                    value = `${value.substring( 0, hash['overlay']['str_length'] )} ...`
                }
            }

            let redirect = null

            switch( option['type'] ) {
                case 'payload':
                    strs['key'] =   `Path         ${option['name']}`
                    strs['value'] = `Example  ${value}`
                    redirect = `${hash['meta']['url']['root']}${hash['meta']['url']['payload']}`
                    break;
                case 'option':
                    strs['key'] =   `Key           :${option['name']}`
                    strs['value'] = `Default      ${value}`
                    redirect = `${hash['meta']['url']['root']}${hash['meta']['url']['options']}${option['name']}${hash['meta']['url']['anchor']}`
                    break;
            }
            
            strs['type'] = `Type         ${option['type'].charAt( 0 ).toUpperCase()}${option['type'].substr(1).toLowerCase()}`
            
            result['strs'] = Object
                .keys( strs )
                .map( key => strs[ key ] )

            result['hover'] = true
            result['position'] = option['position']
            result['redirect'] = redirect

        } else if ( mode === 'viewport' ) {
            result['hover'] = true
            result['position'] = [ x, y ]
            result['redirect'] = `${hash['meta']['url']['root']}${hash['meta']['url']['sections']}${found['self']}.html`
            result['strs'] = [ 
                `Section        ${found['self']}`
            ]
        }
    }

    return result
}


function layers_draw( x, y, layers, pos=[ -100, -100 ] ) {
    current = overlay_hover( x, y )
    if( state['ixd']['hover'] === current['hover'] ) {
        state['ixd']['times'] = state['ixd']['times'] + 1
    } else {
        state['ixd']['hover'] = current['hover']
        state['ixd']['times'] = 0
    }

    render = false
    state['ixd']['times'] === 0 ? render = true : ''
    state['ixd']['hover'] === true ? render = true : ''

    if( render || !state['ixd']['init'] ) {
        state['ixd']['init'] = true
        layers.forEach( layer => {
            switch( layer ) {
                case 'background':
                    background_draw()
                    break;
                case 'sections':
                    sections_draw()
                    break;
                case 'options_single':
                    option_draw( pos[ 0 ], pos[ 1 ], hash['markers']['single'] )
                    break;
                case 'options_categories':
                    options_draw()
                    break;
                case 'overlay':
                    const overlay = overlay_hover( x, y )
                    if( overlay['hover'] ) {
                        item = overlay_prepare( x, y, overlay['strs'] )
                        overlay_draw( item, overlay['strs'] )
                    }
                    break;
                case 'mouse_pointer': 
                    state['ixd']['times'] == 2 ? canvas.style.cursor = 'pointer' : ''
                    break
            }
        } ) 
    } else {
        state['ixd']['times'] == 2 ? canvas.style.cursor = 'default' : ''
    }
}


function init_canvas() {
    const element = document.getElementById( hash['canvas']['id'] )
    element.width = hash['canvas']['viewport']['width']
    element.height = hash['canvas']['viewport']['height']

    const ctx = canvas.getContext( '2d' )
    return ctx
}


function init_viewport( cvs ) {

    const regions = data['options']
        .map( option => option['section'] )
        .filter( ( v, i, a ) => a.indexOf( v ) === i )
        .map( key => data['viewports'].find( viewport => viewport['key'] === key ) )

    cvs['offset']['y'] = regions
        .map( obj => obj['from'] )
        .reduce( ( a, b ) => { return ( a < b ) ? a : b } )

    cvs['viewport']['height'] = regions
        .map( obj => obj['to'] )
        .reduce( ( a, b ) => { return ( a > b ) ? a : b } )
            - cvs['offset']['y']
    return cvs
}


function init_data_validate( sections, mode ) {
    const search = document
        .getElementById( hash['canvas']['id'] )
        .getAttribute( 'search' )
        .replace( ':', '' )

    const palette = document
        .getElementById( hash['canvas']['id'] )
        .getAttribute( 'palette' )
        .replace( ':', '' )

    switch( palette ) {
        case 'section_detail':
            search_key = 'section'
            break;
        case 'section_overview':
            search_key = 'section'
            break;
        default:
            search_key = 'name'
    }

    let unique = JSON.parse( JSON.stringify( sections['options'] ) )
        .filter( opt => opt[ search_key ].includes( search ) )
        .map( ( find ) => { 
            
            find['palette'] = palette

            switch( palette ) {
                case 'option_detail':
                    find['color'] = 'primary'
                    break
                case 'option_overview':
                    find['color'] = find['name'].split( '__' )[ 0 ]
                    break
                case 'section_detail':
                    find['color'] = find['name'].split( '__' )[ 0 ]
                    break
                case 'section_overview':
                    find['color'] = find['name'].split( '__' )[ 0 ]
                    break
                case 'payload_overview':
                    find['color'] = 'primary'
                    break
            }
            
            find['source'] = 'option'
            return find 
        } )

    switch( mode ) {
        case 'validate':
            result = !unique.length == 0
            return result
        case 'data':
            return [ unique, search, palette ]
    }
}


function init_data( sections, find ) {
    const d = {
        'options': null,
        'single': null,
        'sections': null,
        'viewports': null
    }

    const [ unique, search, palette ] = init_data_validate( sections, 'data' )

    let selectors = JSON.parse( JSON.stringify( sections['options'] ) )
        .filter( opt => opt[ search_key ].includes( unique[ 0 ]['selector'] ) )
        .filter( opt => !opt['name'].includes( search ) )
        .map( ( find ) => { 

            find['palette'] = palette
            switch( palette ) {
                case 'option_detail':
                    find['color'] = 'secondary'
                    break
                case 'option_overview':
                    find['color'] = find['name'].split( '__' )[ 0 ]
                    break
                case 'section_detail':
                    find['color'] = find['name'].split( '__' )[ 0 ]
                    break
                case 'payload_overview':
                    find['color'] = find['name'].split( '__' )[ 0 ]
                    break
            }


            find['source'] = 'option'
            return find 
        } )

    d['options'] = unique.concat( selectors )

    switch( palette ) {
        case 'option_overview':
            d['options'] = d['options'].filter( opt => opt['type'] === 'option' )
            break
        case 'option_detail':
            d['options'].filter( opt => opt['type'] === 'option')
            break
        case 'payload_overview':
            d['options'] = d['options'].filter( opt => opt['type'] === 'payload' )
        case 'section_overview':
            break
        case 'section_detail':
            break

    }

    d['single'] = d['options'][ 0 ]['position']
    d['sections'] = sections['sections']

    const keys = Object.keys( d['sections'] )
    d['viewports'] = keys 
        .map( ( key ) => { 
            item = { 
                'key': key, 
                'from' : d['sections'][ key ], 
                'to' : null,
                'middle': null
            }
            return item  
        } )
        .map( ( item, index ) => { 
            if( index === keys.length - 1 ) {
                item['to'] = hash['canvas']['image']['height']
            } else {
                item['to'] = d['sections'][ keys[ index + 1 ] ] - 1 
            }
            item['middle'] = item['from'] + ( item['to'] - item['from'] ) / 2
            return item
        } )

    item = {
        'key': 'all',
        'from': 0,
        'to': d['viewports']
            .map( viewport => viewport['to'] )
            .reduce( ( a, b ) => { return ( a > b ) ? a : b } )
    }
    item['middle'] = item['from'] + ( item['to'] - item['from'] ) / 2
    d['viewports'].push( item )

    return d   
}


function init_data_bounding( d ) { 
    const area_arc = hash['markers']['arc']['radius'] + hash['overlay']['hover']
    const area_triangle = hash['markers']['triangle']['side'] + hash['overlay']['hover']

    hovers = []
    d['options']
        .forEach( option => {
            item = {
                'self': option['name'],
                'x' : {
                    'from' : option['position'][ 0 ] - area_arc - hash['canvas']['offset']['x'],
                    'to' : option['position'][ 0 ] + area_arc - hash['canvas']['offset']['x']
                },
                'y' : {
                    'from': option['position'][ 1 ] - area_arc - hash['canvas']['offset']['y'],
                    'to': option['position'][ 1 ] + area_arc - hash['canvas']['offset']['y']
                }
            }
            hovers.push( item )
        })

    d['viewports']
        .forEach( view => {
            let w = state['ctx'].measureText( view['key'] ).width
            item = {
                'self': `${view['key']}`,
                'x': {
                    'from': 0  - hash['canvas']['offset']['x'],
                    'to': ( hash['sections']['font']['size'] * 1.5 ) - hash['canvas']['offset']['x']
                },
                'y': {
                    'from': view['middle'] - ( w / 2 )  - hash['canvas']['offset']['y'],
                    'to': view['middle'] + ( w / 2 )  - hash['canvas']['offset']['y']
                }
            }
            hovers.push( item)
        })

    return hovers
}


function init_mapSprite( url ) {
    return new Promise( resolve => {
        const image = new Image()
        image.addEventListener( 'load', () => { resolve( image ) } )
        image.src = url;
    } )
}


var hash = {
    'meta': {
        'url': {
            'root': 'http://localhost:4000',
            'options': '/options/',
            'payload': '/payload/',
            'sections': '/sections/',
            'anchor': '#preview'
        }
    },
    'canvas' : {
        'fill': 'white',
        'id': 'canvas',
        'offset': {
            'x' : 0,
            'y' : 0
        },
        'viewport' : {
            'width': 600,
            'height': 849
        },
        'image': {
            'src': '../assets/images/template/preview--wo-mask.png',
            'width': 600,
            'height': 849
        },
        'json': '../assets/other/sections.json'
    },
    'sections': {
        'font': {
            'size': 10,
            'style': 'Helvetica',
            'color': 'grey'
        },
        'stroke': {
            'width': 1,
            'fill': 'grey'
        },
        'fill': 'grey'
    },
    'markers': {
        'arc': {
            'radius' : 4,
            'diameter' : 8
        },
        'triangle': {
            'side': 8
        },
        'option_detail' : {
            'primary': 'orange',
            'secondary': 'grey'
        },
        'option_overview': {
            'show': '#DF0101', 
            'text': '#DF7401',
            'style': '#D7DF01',
            'sections': '#74DF00',
            'footer': '#01A9DB',
            'format_types': '#013ADF'
        },
        'section_detail': {
            'show': '#DF0101', 
            'text': '#DF7401',
            'style': '#D7DF01',
            'sections': '#74DF00',
            'footer': '#01A9DB',
            'format_types': '#013ADF'
        },
        'section_overview': {
            'show': '#DF0101', 
            'text': '#DF7401',
            'style': '#D7DF01',
            'sections': '#74DF00',
            'footer': '#01A9DB',
            'format_types': '#013ADF'
        },
        'payload_overview': {
            'primary': 'orange',
            'secondary': 'grey'
        },
        'single': 'pink'
    },
    'overlay': {
        'hover': 1,
        'str_length': 30,
        'font': {
            'size': 10,
            'space': 3
        },
        'triangle': {
            'size': 8
        },
        'offset': {
            'x': 20,
            'y': 0
        },
        'padding': {
            'left': 16,
            'right': 16,
            'top': 8,
            'bottom': 8
        },
        'colors': {
            'background': 'black',
            'text': 'white'
        }
    },
    'layers': [ 
        'background', 
        'sections',
        'options_categories',
        'mouse_pointer',
        'overlay'
    ],
    'events': [
        'DOMContentLoaded',
        'onmousemove',
        'onclick'
    ]
}


var data = null

var state = {
    'ctx': null,
    'mapSprite': null,
    'ixd': { 'hover': false, 'times': 0, 'init': false }
}
 
if( document.location.toString().includes( '8080' ) ) {
    hash['canvas']['image']['src'] = './images/template/preview--wo-mask.png'
    hash['canvas']['json'] = './other/sections.json'
}

window.onload = () => { 
    fetch( hash['canvas']['json'] )
    .then( response => { return response.json() } )
    .then( scs => { sections = scs } )
    .then( () => init_mapSprite( hash['canvas']['image']['src'] ) )
    .then( ( ms ) => {
        state['mapSprite'] = ms

        if( init_data_validate( sections, 'validate' ) ) {
            data = init_data( sections )

            hash['canvas'] = init_viewport( hash['canvas'] )
            state['ctx'] = init_canvas()
            data['bounding'] = init_data_bounding( data )
    
            const x = data['single'][ 0 ]
            const y = data['single'][ 1 ]
            layers_draw( x, y, hash['layers'], data['single'], state['ctx'] )   

            const cvs = document.getElementById( hash['canvas']['id'] )
            cvs.onmousemove = ( mouse ) => { 
                const x = mouse.offsetX
                const y = mouse.offsetY
                layers_draw( x, y, hash['layers'], data['single'], state['ctx'] )
            }

            cvs.onclick = ( mouse ) => { 
                const x = mouse.offsetX
                const y = mouse.offsetY
                r = overlay_hover( x, y )
                r['hover'] ? window.location = r['redirect'] : ''
            }
        } else {
            let elem = document. getElementById( hash['canvas']['id'] ) 
            elem.parentNode.removeChild( elem )
        }

        return true
    } )
}







