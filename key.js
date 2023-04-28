var textarea = document.createElement("textarea");
    //var t = document.createTextNode("your text");
textarea.setAttribute('style','color:black; border: 1px solid black; width:800px;height:300px; margin:20px auto;display:flex;')
   // textarea.appendChild(t);
document.body.appendChild(textarea);
   
var letter = document.createElement("div");
    //var t = document.createTextNode("your text");
letter.classList.add('letter-holder')
document.body.appendChild(letter);
    
//let cod=[];
   // let keybord=['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ControlLeft', 'MetaLeft'];
// let keybord=['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/','ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control'];
// let keybordShift=['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?','ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control'];
// let keybordCaps=['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/','ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control'];

//    document.onkeydown=function(e){
//     cod.push(e.key);
   
//         console.log(cod)

//     }
let en=[
    {
      small: '`',
      shift: '~',
      code: 'Backquote',
    },
    {
      small: '1',
      shift: '!',
      code: 'Digit1',
    },
    {
      small: '2',
      shift: '@',
      code: 'Digit2',
    },
    {
      small: '3',
      shift: '#',
      code: 'Digit3',
    },
    {
      small: '4',
      shift: '$',
      code: 'Digit4',
    },
    {
      small: '5',
      shift: '%',
      code: 'Digit5',
    },
    {
      small: '6',
      shift: '^',
      code:'Digit6'
    },
    {
      small: '7',
      shift: '&',
      code: 'Digit7',
    },
    {
      small: '8',
      shift: '*',
      code: 'Digit8',
    },
    {
      small: '9',
      shift: '(',
      code: 'Digit9',
    },
    {
      small: '0',
      shift: ')',
      code: 'Digit0',
    },
    {
      small: '-',
      shift: '_',
      code: 'Minus',
    },
    {
      small: '=',
      shift: '+',
      code: 'Equal',
    },
    {
      small: 'Backspace',
      code: 'Backspace',
    },
    {
      small: 'Tab',
      code: 'Tab',
    },
    {
      small: 'q',
      code: 'KeyQ',
    },
    {
      small: 'w',
      code: 'KeyW',
    },
    {
      small: 'e',
      code: 'KeyE',
    },
    {
      small: 'r',
      code: 'KeyR',
    },
    {
      small: 't',
      code: 'KeyT',
    },
    {
      small: 'y',
      code: 'KeyY',
    },
    {
      small: 'u',
      code: 'KeyU',
    },
    {
      small: 'i',
      code: 'KeyI',
    },
    {
      small: 'o',
      code: 'KeyO',
    },
    {
      small: 'p',
      code: 'KeyP',
    },
    {
      small: '[',
      shift: '{',
      code: 'BracketLeft',
    },
    {
      small: ']',
      shift: '}',
      code: 'BracketRight',
    },
    {
        small: '\\',
        shift: '|',
        code: 'Backslash',
    },
  
    {
      small: 'CapsLock',
      code: 'CapsLock',
    },
    {
      small: 'a',

      code: 'KeyA',
    },
    {
      small: 's',
      code: 'KeyS',
    },
    {
      small: 'd',
      code: 'KeyD',
    },
    {
      small: 'f',
      code: 'KeyF',
    },
    {
      small: 'g',
      code: 'KeyG',
    },
    {
      small: 'h',
      code: 'KeyH',
    },
    {
      small: 'j',
      code: 'KeyJ',
    },
    {
      small: 'k',
      code: 'KeyK',
    },
    {
      small: 'l',
      code: 'KeyL',
    },
    {
      small: ';',
      shift: ':',
      code: 'Semicolon',
    },
    {
      small: "\'",
      shift: '&quot;',
      code: 'Quote',

    },
    {
      small: 'Enter',
      code: 'Enter',
      },
    {
      small: 'Shift',
      code: 'ShiftLeft',
    },
 
    {
      small: 'z',
      code: 'KeyZ',
    },
    {
      small: 'x',
      code: 'KeyX',
    },
    {
      small: 'c',
      code: 'KeyC',
    },
    {
      small: 'v',
      code: 'KeyV',
    },
    {
      small: 'b',
      code: 'KeyB',
    },
    {
      small: 'n',
      code: 'KeyN',
    },
    {
      small: 'm',
      code: 'KeyM',
    },
    {
      small: ',',
      shift: '<',
      code: 'Comma',

    },
   
    {
      small: '.',
      shift: '>',
      code: 'Period',
    },
    {
      small: '/',
      shift: '?',
      code: 'Slash',
    }, {
      small: '&uarr;',
      shift: '&uarr;',
      code: 'ArrowUp',
    },
    {
      small: 'Shift',
      shift: 'Shift',
      code: 'ShiftRight',
    },

   

    {
      small: 'Ctrl',
      code: 'ControlLeft',
    },
    {
      small: 'Mic',
      code: 'Mic',
    },
    {
      small: 'Alt',
      code: 'AltLeft',
    },
    {
      small: ' ',
      shift: ' ',
      code: 'Space',
    },
    {
      small: 'Alt',
      code: 'AltRight',
    },
    {
      small: 'Ctrl',
      code: 'ControlRight',
    },
    {
      small: '&larr;',
      code: 'ArrowLeft',
    },
    
    {
      small: '&darr;',
      code: 'ArrowDown',
    },
    {
      small: '&rarr;',
      code: 'ArrowRight',
    },
    
  ];
let ru=[
 
  {
    small: 'ё',
    code: 'Backquote',
  },
  {
    small: '1',
    shift: '!',
    code: 'Digit1',
  },
  {
    small: '2',
    shift: '&quot;',
    code: 'Digit2',
  },
  {
    small: '3',
    shift: '№',
    code: 'Digit3',
  },
  {
    small: '4',
    shift: ';',
    code: 'Digit4',
  },
  {
    small: '5',
    shift: '%',
    code: 'Digit5',
  },
  {
    small: '6',
    shift: ':',
    code: 'Digit6',
  },
  {
    small: '7',
    shift: '?',
    code: 'Digit7',
  },
  {
    small: '8',
    shift: '*',
    code: 'Digit8',
  },
  {
    small: '9',
    shift: '(',
    code: 'Digit9',
  },
  {
    small: '0',
    shift: ')',
    code: 'Digit0',
  },
  {
    small: '-',
    shift: '_',
    code: 'Minus',
  },
  {
    small: '=',
    shift: '+',
    code: 'Equal',
  },
  {
    small: 'Backspace',
    code: 'Backspace',
  },
  {
    small: 'Tab',
    code: 'Tab',
  },
  {
    small: 'й',
    code: 'KeyQ',
  },
  {
    small: 'ц',
    code: 'KeyW',
  },
  {
    small: 'у',
    code: 'KeyE',
  },
  {
    small: 'к',
    code: 'KeyR',
  },
  {
    small: 'e',
    code: 'KeyT',
  },
  {
    small: 'н',
    code: 'KeyY',
  },
  {
    small: 'г',
    code: 'KeyU',
  },
  {
    small: 'ш',
    code: 'KeyI',
  },
  {
    small: 'щ',
    code: 'KeyO',
  },
  {
    small: 'з',
    code: 'KeyP',
  },
  {
    small: 'х',
    code: 'BracketLeft',
  },
  {
    small: 'ъ',
    code: 'BracketRight',
  }, 
  {
    small: '\\',
    code: 'Backslash',
  },

  {
    small: 'CapsLock',
    code: 'CapsLock',
  },
 
  {
    small: 'ф',
    code: 'KeyA',
  },
  {
    small: 'ы',
    code: 'KeyS',
  },
  {
    small: 'в',
    code: 'KeyD',
  },
  {
    small: 'а',
    code: 'KeyF',
  },
  {
    small: 'п',
    code: 'KeyG',
  },
  {
    small: 'р',
    code: 'KeyH',
  },
  {
    small: 'о',
    code: 'KeyJ',
  },
  {
    small: 'л',
    code: 'KeyK',
  },
  {
    small: 'д',
    code: 'KeyL',
  },
  {
    small: 'ж',
    code: 'Semicolon',
  },
  {
    small: 'э',
    code: 'Quote',
  },
  {
    small: 'Enter',
    code: 'Enter',
  },
  {
    small: 'Shift',
    code: 'ShiftLeft',
  },

  {
    small: 'я',
    code: 'KeyZ',
  },
  {
    small: 'ч',
    code: 'KeyX',
  },
  {
    small: 'с',
    code: 'KeyC',
  },
  {
    small: 'м',
    code: 'KeyV',
  },
  {
    small: 'и',
    code: 'KeyB',
  },
  {
    small: 'т',
    code: 'KeyN',
  },
  {
    small: 'ь',
    code: 'KeyM',
  },
  {
    small: 'б',
    code: 'Comma',
  },
  {
    small: 'ю',
    code: 'Period',
  },
  {
    small: '.',
    shift: ',',
    code: 'Slash',
  },
  {
    small: '&uarr;',
    code: 'ArrowUp',
  },
  {
    small: 'Shift',
    code: 'ShiftRight',
  },
  {
    small: 'Ctrl',
    code: 'ControlLeft',
  },
  {
    small: 'Mic',
    code: 'Mic',
  },

  {
    small: 'Alt',
    code: 'AltLeft',
  },
  {
    small: ' ',
    code: 'Space',
  },
  {
    small: 'Alt',
    code: 'AltRight',
  },
  {
    small: 'Ctrl',
    code: 'ControlRight',
  },
  {
    small: '&larr;',
    code: 'ArrowLeft',
  },
 
  {
    small: '&darr;',
    code: 'ArrowDown',
  },
  {
    small: '&rarr;',
    code: 'ArrowRight',
  },
 
];

function init(keybord,keyru){
    let out='';
    for (let i=0;i<keybord.length;i++){
      if (keybord[i].code==='Backspace'){out+='<div class="key backspace" data="'+keybord[i].code+'">'+String( keybord[i].small)+'</div>'}
      else if (keybord[i].code==='Tab'){out+='<div class="key tab" data="'+keybord[i].code+'">'+String( keybord[i].small)+'</div>'}
      else if (keybord[i].code==='CapsLock'){out+='<div class="key caps" data="'+keybord[i].code+'">'+String( keybord[i].small)+'</div>'}
      else if (keybord[i].code==='ShiftLeft'){out+='<div class="key shift-left" data="'+keybord[i].code+'">'+String( keybord[i].small)+'</div>'}
      else if (keybord[i].code==='ShiftRight'){out+='<div class="key shift-right" data="'+keybord[i].code+'">'+String( keybord[i].small)+'</div>'}
      else if (keybord[i].code==='Enter'){out+='<div class="key enter" data="'+keybord[i].code+'">'+String( keybord[i].small)+'</div>'}
      else if (keybord[i].code==='ControlLeft'){out+='<div class="key ctrl-left" data="'+keybord[i].code+'">'+String( keybord[i].small)+'</div>'}
      else if (keybord[i].code==='ControlRight'){out+='<div class="key ctrl-right" data="'+keybord[i].code+'">'+String( keybord[i].small)+'</div>'}
      else if (keybord[i].code==='Alt'){out+='<div class="key alt" data="'+keybord[i].code+'">'+String( keybord[i].small)+'</div>'}
      else if (keybord[i].code==='Mic'){out+='<div class="key meta" data="'+keybord[i].code+'">'+String( keybord[i].small)+'</div>'}
      else if (keybord[i].code==='AltLeft'){out+='<div class="key meta" data="'+keybord[i].code+'">'+String( keybord[i].small)+'</div>'}
      else if (keybord[i].code==='AltRight'){out+='<div class="key meta" data="'+keybord[i].code+'">'+String( keybord[i].small)+'</div>'}
      else if (keybord[i].code==='Space'){out+='<div class="key space" data="'+keybord[i].code+'">'+String(keybord[i].small)+'</div>'}
      else if (keybord[i].code==='ArrowUp'){out+='<div class="key" data="'+keybord[i].code+'">'+String(keybord[i].small)+'</div>'}
      else if (keybord[i].code==='ArrowDown'){out+='<div class="key" data="'+keybord[i].code+'">'+String(keybord[i].small)+'</div>'}
      else if (keybord[i].code==='ArrowLeft'){out+='<div class="key" data="'+keybord[i].code+'">'+String(keybord[i].small)+'</div>'}
      else if (keybord[i].code==='ArrowRight'){out+='<div class="key" data="'+keybord[i].code+'">'+String(keybord[i].small)+'</div>'}
      else if (keybord[i].code==='BracketLeft'){out+='<div class="key" data="'+keybord[i].code+'" data-number="'+keybord[i].small+'" data-symbol="'+keybord[i].shift+'" data-ru="'+keyru[i].small+'" >'+String(keybord[i].small)+'</div>'}
      else if (keybord[i].code==='BracketRight'){out+='<div class="key" data="'+keybord[i].code+'" data-number="'+keybord[i].small+'" data-symbol="'+keybord[i].shift+'" data-ru="'+keyru[i].small+'" >'+String(keybord[i].small)+'</div>'}
      else if (keybord[i].code==='Backslash'){out+='<div class="key" data="'+keybord[i].code+'" data-number="'+keybord[i].small+'" data-symbol="'+keybord[i].shift+'" data-symbol-ru="'+keyru[i].small+'" data-ru-shift="'+keyru[i].shift+'" >'+String(keybord[i].small)+'</div>'; } 
      else if (keybord[i].code==='Semicolon'){out+='<div class="key" data="'+keybord[i].code+'" data-number="'+keybord[i].small+'" data-symbol="'+keybord[i].shift+'" data-ru="'+keyru[i].small+'" >'+String(keybord[i].small)+'</div>'}
      else if (keybord[i].code==='Quote'){out+='<div class="key" data="'+String(keybord[i].code)+'" data-number="'+keybord[i].small+'" data-symbol="'+keybord[i].shift+'" data-ru="'+keyru[i].small+'" >'+String(keybord[i].small)+'</div>'; console.log(keybord[i].shift, "SHIF")}
      else if (keybord[i].code==='Comma'){out+='<div class="key" data="'+keybord[i].code+'" data-number="'+keybord[i].small+'" data-symbol="'+keybord[i].shift+'" data-ru="'+keyru[i].small+'" >'+String(keybord[i].small)+'</div>'}
      else if (keybord[i].code==='Period'){out+='<div class="key" data="'+keybord[i].code+'" data-number="'+keybord[i].small+'" data-symbol="'+keybord[i].shift+'" data-ru="'+keyru[i].small+'" >'+String(keybord[i].small)+'</div>'}
      else if (keybord[i].code==='Slash'){out+='<div class="key" data="'+keybord[i].code+'" data-number="'+keybord[i].small+'" data-symbol="'+keybord[i].shift+'" data-symbol-ru="'+keyru[i].small+'" data-ru-shift="'+keyru[i].shift+'">'+String(keybord[i].small)+'</div>'}
      else if (keybord[i].code==='Minus'){out+='<div class="key" data="'+keybord[i].code+'" data-number="'+keybord[i].small+'" data-symbol="'+keybord[i].shift+'">'+String(keybord[i].small)+'</div>'}
      else if (keybord[i].code==='Equal'){out+='<div class="key" data="'+keybord[i].code+'" data-number="'+keybord[i].small+'" data-symbol="'+keybord[i].shift+'">'+String(keybord[i].small)+'</div>'}
      else if (keybord[i].code==='Backquote'){out+='<div class="key" data="'+keybord[i].code+'" data-number="'+keybord[i].small+'" data-symbol="'+keybord[i].shift+'" data-ru="'+keyru[i].small+'">'+String(keybord[i].small)+'</div>'}
      else if(Number( keybord[i].small)||keybord[i].small==='0'){if ( [2,3,4,6,7].includes(Number(keybord[i].small))) {
        out+='<div class="key" data="'+keybord[i].code+'" data-number="'+keybord[i].small+'" data-symbol="'+keybord[i].shift+'" data-symbol-ru="'+keyru[i].shift+'">'+String(keybord[i].small)+'</div>'
      }
       else{ out+='<div class="key" data="'+keybord[i].code+'" data-number="'+keybord[i].small+'" data-symbol="'+keybord[i].shift+'">'+String(keybord[i].small)+'</div>'}}
      else{out+='<div class="key" data="'+keybord[i].code+'" data-en="'+keybord[i].small+'" data-ru="'+keyru[i].small+'">'+String( keybord[i].small)+'</div>'}
    } 
    letter.innerHTML=(out);
   }
init(en,ru)

let shiftFuncDown=function(){ 
    for(let i=0;i<letter.children.length;i++){
    let child =letter.children[i];
    let dataEn=child.getAttribute('data-en');
    let dataSymbol= child.getAttribute('data-symbol');
    let dataNumber=child.getAttribute('data-number');
    
    if (typeof(dataEn)==='string'){dataEn=dataEn.toUpperCase();
        child.innerHTML=dataEn
    }
    if ("'"===dataNumber){
        child.innerHTML=dataSymbol;
      
    }
    if (Number(dataNumber)||dataNumber==='0'||['-',';','=',"[","]","\\", ',','.','`','/', "'"].includes(dataNumber)){
        child.innerHTML=dataSymbol;
       // console.log(dataNumber)
    }
    
}

}
let shiftFunUp=function(){
    for(let i=0;i<letter.children.length;i++){
        let child =letter.children[i];
        let data=child.getAttribute('data'); 
        let dataRu=child.getAttribute('data-ru'); 
        let dataEn=child.getAttribute('data-en');
        let dataShift= child.getAttribute('data-shift');
        let dataSymbolRu= child.getAttribute('data-symbol-ru');
        let dataSymbol= child.getAttribute('data-symbol');
        let dataEnShift= child.getAttribute('data-en-shift');
        let dataNumber=child.getAttribute('data-number');
      //  console.log(dataSymbol)
        
        if (typeof(dataEn)==='string'){dataEn=dataEn.toLocaleLowerCase();
            child.innerHTML=dataEn
        }
        if (['_',':','+',"{","}","|",'<','>','~','?','!','@','#','$','%','^','&','*','(',')','\"'].includes(dataSymbol)){
           // console.log(dataNumber)
            child.innerHTML=dataNumber
        }
       
    }
}


let shiftFuncDownUpper=function(){ 
    for(let i=0;i<letter.children.length;i++){
    let child =letter.children[i];
    let dataEn=child.getAttribute('data-en');
    let dataSymbol= child.getAttribute('data-symbol');
    let dataNumber=child.getAttribute('data-number');
    
    if (typeof(dataEn)==='string'){dataEn=dataEn.toLocaleLowerCase();
        child.innerHTML=dataEn
    }
    if ("'"===dataNumber){
        child.innerHTML=dataSymbol;
      
    }
    if (Number(dataNumber)||dataNumber==='0'||['-',';','=',"[","]","\\", ',','.','`','/', "'"].includes(dataNumber)){
        child.innerHTML=dataSymbol;
       // console.log(dataNumber)
    }
    
}

}
let shiftFunUpUpper=function(){
    for(let i=0;i<letter.children.length;i++){
        let child =letter.children[i];
        let data=child.getAttribute('data'); 
        let dataRu=child.getAttribute('data-ru'); 
        let dataEn=child.getAttribute('data-en');
        let dataShift= child.getAttribute('data-shift');
        let dataSymbolRu= child.getAttribute('data-symbol-ru');
        let dataSymbol= child.getAttribute('data-symbol');
        let dataEnShift= child.getAttribute('data-en-shift');
        let dataNumber=child.getAttribute('data-number');
      //  console.log(dataSymbol)
        
        if (typeof(dataEn)==='string'){dataEn=dataEn.toLocaleUpperCase();
            child.innerHTML=dataEn
        }
        if (['_',':','+',"{","}","|",'<','>','~','?','!','@','#','$','%','^','&','*','(',')','\"'].includes(dataSymbol)){
           // console.log(dataNumber)
            child.innerHTML=dataNumber
        }
       
    }
}

let capsFuncDown=function(){ 
    for(let i=0;i<letter.children.length;i++){
    let child =letter.children[i];
    let dataEn=child.getAttribute('data-en');
    let dataSymbol= child.getAttribute('data-symbol');
    let dataNumber=child.getAttribute('data-number');
    
    if (typeof(dataEn)==='string'){dataEn=dataEn.toUpperCase();
        child.innerHTML=dataEn
    }
    if (['_',':','+',"{","}","|",'<','>','~','?','!','@','#','$','%','^','&','*','(',')','\"'].includes(dataSymbol)){
        // console.log(dataNumber)
         child.innerHTML=dataNumber
     }
   
}

}
let capsFunUp=function(){
    for(let i=0;i<letter.children.length;i++){
        let child =letter.children[i];
        let data=child.getAttribute('data'); 
        let dataRu=child.getAttribute('data-ru'); 
        let dataEn=child.getAttribute('data-en');
        let dataShift= child.getAttribute('data-shift');
        let dataSymbolRu= child.getAttribute('data-symbol-ru');
        let dataSymbol= child.getAttribute('data-symbol');
        let dataEnShift= child.getAttribute('data-en-shift');
        let dataNumber=child.getAttribute('data-number');
      //  console.log(dataSymbol)
        
        if (typeof(dataEn)==='string'){dataEn=dataEn.toLocaleLowerCase();
            child.innerHTML=dataEn
        }
        if (['_',':','+',"{","}","|",'<','>','~','?','!','@','#','$','%','^','&','*','(',')','\"'].includes(dataSymbol)){
            // console.log(dataNumber)
             child.innerHTML=dataNumber
         }
       
    }
}
for(let i=0;i<letter.children.length;i++){
    let child =letter.children[i];
console.log(letter.children[17].textContent===letter.children[17].textContent.toUpperCase());

    
    child.addEventListener('mousedown', function() {
        if(child.classList.contains('caps')) 
        {console.log(letter.children[17].innerText===letter.children[17].innerText.toUpperCase());
            if (letter.children[17].innerText===letter.children[17].innerText.toUpperCase())
            {capsFunUp();console.log("--> Hi1")}
       
        else{capsFuncDown(); } console.log("--> Hi2s")}
    
        }
    );
    
        child.addEventListener('mousedown', function() {
            if(child.classList.contains('shift-right') || child.classList.contains('shift-left')) {
                if (letter.children[17].innerText===letter.children[17].innerText.toLocaleLowerCase())
                  {shiftFuncDown();}
                  else{shiftFuncDownUpper();}
                
            }
        });
    
        child.addEventListener('mouseup', function() {
            console.log("--> Mouse UP!!!!");
            if(child.classList.contains('shift-right')|| child.classList.contains('shift-left')) {
                if (letter.children[17].innerText===letter.children[17].innerText.toUpperCase())
              {shiftFunUp();}
              else{shiftFunUpUpper();}
               
            }
        })





    // child.addEventListener('mousedown', function() {
    //     if(child.classList.contains('shift-right') || child.classList.contains('shift-left')) {
    //         console.log("--> Mouse DOWN!!!")
    //         shiftFuncDown();

    //     }
    // });

    // child.addEventListener('mouseup', function() {
    //     if(child.classList.contains('shift-right')|| child.classList.contains('shift-left')) {
    //         shiftFunUp();
    //     }
    // });
    
  }
    


 
document.addEventListener('keyup', function(event) {  
     if (event.key == 'Shift' ) {shiftFunUp(); } 
      }
  );
  
document.addEventListener('keydown', function(event) {    
       if (event.key == 'Shift') { shiftFuncDown(); }
        }
    );


// document.addEventListener('click',()=> {
//     if (en[28].code==='CapsLock' ) {initShift(en); console.log(1) }
//     });
 
// document.addEventListener('keydown', function(event) {
//      textarea.appendChild('event.key')}
// );


// document.addEventListener('click', function(event) {
  
//     for (let i=0;i<en.length;i++){
//       if(en[i].code==='CapsLock'){ initShift(en);
//      }}
//     }
    
// );

// document.addEventListener('click', function(event) {
  
//     for (let i=0;i<en.length;i++){
   
//    textarea.appendChild('en[i].small')}}
// );
document.onkeydown=function(event){
  letter.querySelectorAll('.letter-holder .key').forEach(function(e){
   e.classList.remove('active')
  })
  letter.querySelector('.letter-holder .key[data="'+event.code+'"]').classList.add('active')
 }

letter.querySelectorAll('.letter-holder .key').forEach(function(e){
  e.onclick=function(event){
    letter.querySelectorAll('.letter-holder .key').forEach(function(e){
      e.classList.remove('active');
    });
    let code=this.getAttribute('data');
    this.classList.add('active');
  }
})

for (let key of en) {
   // console.log(key.small)
    key.onclick = function () {
    textarea.append(key.small.textContent);
    console.log(key.small.textContent,57)
    }
    }

//     let code= letter.querySelectorAll('.letter-holder .key').forEach(function(e){
        
//           let code=e.getAttribute('data'); console.log(code)
//       })
//  console.log(code)
