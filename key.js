(()=>{
var textarea = document.createElement("textarea");
textarea.setAttribute('style','color:black; border: 1px solid black; width:800px;height:300px; margin:20px auto;display:flex;')
document.body.appendChild(textarea);
   
var letter = document.createElement("div");
letter.classList.add('letter-holder')
document.body.appendChild(letter);
localStorage.setItem('lang','')   
localStorage.setItem('case','')

console.log(localStorage.getItem('lang'),'localStorage') 
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
      small: "'",
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
    shift: '/',
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
    for (let i = 0;i<keybord.length;i++){
      if (keybord[i].code === 'Backspace') {out+='<div class="key backspace" data="'+keybord[i].code+'">'+String( keybord[i].small)+'</div>'}
      else if (keybord[i].code === 'Tab') {out+='<div class="key tab" data="'+keybord[i].code+'">'+String( keybord[i].small)+'</div>'}
      else if (keybord[i].code ==='CapsLock') {out+='<div class="key caps" data="'+keybord[i].code+'">'+String( keybord[i].small)+'</div>'}
      else if (keybord[i].code === 'ShiftLeft') {out+='<div class="key shift-left" data="'+keybord[i].code+'">'+String( keybord[i].small)+'</div>'}
      else if (keybord[i].code === 'ShiftRight') {out+='<div class="key shift-right" data="'+keybord[i].code+'">'+String( keybord[i].small)+'</div>'}
      else if (keybord[i].code === 'Enter') {out+='<div class="key enter" data="'+keybord[i].code+'">'+String( keybord[i].small)+'</div>'}
      else if (keybord[i].code === 'ControlLeft') {out+='<div class="key ctrl-left" data="'+keybord[i].code+'">'+String( keybord[i].small)+'</div>'}
      else if (keybord[i].code === 'ControlRight') {out+='<div class="key ctrl-right" data="'+keybord[i].code+'">'+String( keybord[i].small)+'</div>'}
      else if (keybord[i].code === 'Alt') {out+='<div class="key alt" data="'+keybord[i].code+'">'+String( keybord[i].small)+'</div>'}
      else if (keybord[i].code === 'Mic') {out+='<div class="key meta" data="'+keybord[i].code+'">'+String( keybord[i].small)+'</div>'}
      else if (keybord[i].code === 'AltLeft') {out+='<div class="key meta" data="'+keybord[i].code+'">'+String( keybord[i].small)+'</div>'}
      else if (keybord[i].code === 'AltRight') {out+='<div class="key meta" data="'+keybord[i].code+'">'+String( keybord[i].small)+'</div>'}
      else if (keybord[i].code === 'Space') {out+='<div class="key space" data="'+keybord[i].code+'">'+String(keybord[i].small)+'</div>'}
      else if (keybord[i].code === 'ArrowUp') {out+='<div class="key" data="'+keybord[i].code+'">'+String(keybord[i].small)+'</div>'}
      else if (keybord[i].code === 'ArrowDown') {out+='<div class="key" data="'+keybord[i].code+'">'+String(keybord[i].small)+'</div>'}
      else if (keybord[i].code === 'ArrowLeft') {out+='<div class="key" data="'+keybord[i].code+'">'+String(keybord[i].small)+'</div>'}
      else if (keybord[i].code === 'ArrowRight') {out+='<div class="key" data="'+keybord[i].code+'">'+String(keybord[i].small)+'</div>'}
      else if (keybord[i].code === 'BracketLeft') {out+='<div class="key" data="'+keybord[i].code+'" data-number="'+keybord[i].small+'" data-symbol="'+keybord[i].shift+'" data-ru="'+keyru[i].small+'" >'+String(keybord[i].small)+'</div>'}
      else if (keybord[i].code === 'BracketRight') {out+='<div class="key" data="'+keybord[i].code+'" data-number="'+keybord[i].small+'" data-symbol="'+keybord[i].shift+'" data-ru="'+keyru[i].small+'" >'+String(keybord[i].small)+'</div>'}
      else if (keybord[i].code === 'Backslash') {out+='<div class="key" data="'+keybord[i].code+'" data-number="'+keybord[i].small+'" data-symbol="'+keybord[i].shift+'" data-symbol-ru="'+keyru[i].small+'" data-ru-shift="'+keyru[i].shift+'" >'+String(keybord[i].small)+'</div>'; } 
      else if (keybord[i].code === 'Semicolon') {out+='<div class="key" data="'+keybord[i].code+'" data-number="'+keybord[i].small+'" data-symbol="'+keybord[i].shift+'" data-ru="'+keyru[i].small+'" >'+String(keybord[i].small)+'</div>'}
      else if (keybord[i].code === 'Quote') {out+='<div class="key" data="'+String(keybord[i].code)+'" data-number="'+keybord[i].small+'" data-symbol="'+keybord[i].shift+'" data-ru="'+keyru[i].small+'" >'+String(keybord[i].small)+'</div>'; }
      else if (keybord[i].code === 'Comma') {out+='<div class="key" data="'+keybord[i].code+'" data-number="'+keybord[i].small+'" data-symbol="'+keybord[i].shift+'" data-ru="'+keyru[i].small+'" >'+String(keybord[i].small)+'</div>'}
      else if (keybord[i].code === 'Period') {out+='<div class="key" data="'+keybord[i].code+'" data-number="'+keybord[i].small+'" data-symbol="'+keybord[i].shift+'" data-ru="'+keyru[i].small+'" >'+String(keybord[i].small)+'</div>'}
      else if (keybord[i].code === 'Slash') {out+='<div class="key" data="'+keybord[i].code+'" data-number="'+keybord[i].small+'" data-symbol="'+keybord[i].shift+'" data-symbol-ru="'+keyru[i].small+'" data-ru-shift="'+keyru[i].shift+'">'+String(keybord[i].small)+'</div>'}
      else if (keybord[i].code === 'Minus') {out+='<div class="key" data="'+keybord[i].code+'" data-number="'+keybord[i].small+'" data-symbol="'+keybord[i].shift+'">'+String(keybord[i].small)+'</div>'}
      else if (keybord[i].code === 'Equal') {out+='<div class="key" data="'+keybord[i].code+'" data-number="'+keybord[i].small+'" data-symbol="'+keybord[i].shift+'">'+String(keybord[i].small)+'</div>'}
      else if (keybord[i].code === 'Backquote') {out+='<div class="key" data="'+keybord[i].code+'" data-number="'+keybord[i].small+'" data-symbol="'+keybord[i].shift+'" data-ru="'+keyru[i].small+'">'+String(keybord[i].small)+'</div>'}
      else if (Number( keybord[i].small) || keybord[i].small==='0') { if ( [2,3,4,6,7].includes(Number(keybord[i].small))) {
        out+='<div class = "key" data = "'+keybord[i].code+'" data-number = "'+keybord[i].small+'" data-symbol = "'+keybord[i].shift+'" data-symbol-ru = "'+keyru[i].shift+'">'+String(keybord[i].small)+'</div>'
      }
       else { out+='<div class = "key" data = "'+keybord[i].code+'" data-number = "'+keybord[i].small+'" data-symbol = "'+keybord[i].shift+'">'+String(keybord[i].small)+'</div>'}}
      else  {out+='<div class = "key" data = "'+keybord[i].code+'" data-en = "'+keybord[i].small+'" data-ru = "'+keyru[i].small+'">'+String( keybord[i].small)+'</div>'}
    } 
    letter.innerHTML = (out);
   }

   
if(localStorage.getItem('lang') === 'RU'||localStorage.getItem('lang'))
  {init(ru,en)}
else {init(en,ru)}

let shiftFuncDown=function(){ 
    for(let i=0;i<letter.children.length;i++){
        let child =letter.children[i];
        let dataRu=child.getAttribute('data-ru'); 
        let dataEn=child.getAttribute('data-en');
        let dataSymbolRu= child.getAttribute('data-symbol-ru');
        let dataSymbol= child.getAttribute('data-symbol');
        let dataNumber=child.getAttribute('data-number');
        let dataRuShift=child.getAttribute('data-ru-shift');
    if(localStorage.getItem('lang') === 'RU'){
      if (typeof(dataEn) === 'string' ){dataRu=dataRu.toUpperCase();
        child.innerHTML = dataRu;
        
      }
      if ( ['ё','х','ъ','ж','э','б','ю'].includes(dataRu))
      {
        child.innerHTML = String(dataRu).toUpperCase()
      }
      if (Number(dataNumber)||dataNumber==='0'||['-','=','/','%',"\\"].includes(dataNumber) ){
        child.innerHTML=dataSymbol;
        
      } 
      if (["\\",'.'].includes(dataSymbolRu)){
        child.innerHTML=dataRuShift;
      } 
      if(['2','3','4','6','7'].includes(dataNumber)){
        child.innerHTML=dataSymbolRu;console.log(dataRuShift)
      }

}
    else{console.log('En')
      if (typeof(dataEn)==='string'){dataEn=dataEn.toUpperCase();
        child.innerHTML=dataEn
      }
      if (Number(dataNumber)||dataNumber==='0'||['-',';','=',"[","]","\\", ',','.','`','/', "'"].includes(dataNumber)){
        child.innerHTML=dataSymbol;
      }

   } 
}
}

let shiftFunUp=function(){
    for(let i=0;i<letter.children.length;i++){
        let child =letter.children[i];
        let dataRu=child.getAttribute('data-ru'); 
        let dataEn=child.getAttribute('data-en');
        let dataSymbolRu= child.getAttribute('data-symbol-ru');
        let dataSymbol= child.getAttribute('data-symbol');
        let dataNumber=child.getAttribute('data-number');
        let dataRuShift=child.getAttribute('data-ru-shift');
        if(localStorage.getItem('lang') === 'RU'){ //console.log(localStorage.getItem('lang') === 'RU')
          if ( typeof(dataRu) === 'string'  ) { 
            dataRu=dataRu.toLocaleLowerCase();
            child.innerHTML=dataRu;    
          }
          if ( ['ё','х','ъ','ж','э','б','ю'].includes(dataRu) ) {
           child.innerHTML=dataRu.toLowerCase(); 
          }
          if ( ['_','+','?','!','*','(',')','№','%','/'].includes(dataSymbol) ) {
            child.innerHTML=dataNumber
          }
          if ( ['/',','].includes(dataRuShift) ) {
            child.innerHTML=dataSymbolRu;
          }
          if ( ['"','№',';',':','?'].includes(dataSymbolRu) ) {
            child.innerHTML=dataNumber;
          }
          }

        else{
          if (typeof(dataEn) === 'string'){dataEn=dataEn.toLocaleLowerCase();
            child.innerHTML=dataEn
          }
          if (['_',':','+',"{","}","|",'<','>','~','?','!','@','#','$','%','^','&','*','(',')','"'].includes(dataSymbol)){
            console.log(dataSymbol,['_',':','+',"{","}","|",'<','>','~','?','!','@','#','$','%','^','&','*','(',')','"'].includes(dataSymbol))
            child.innerHTML=dataNumber
          }
        } 
    }
}
let ctrlAltEn=function(){
    for(let i=0;i<letter.children.length;i++){
        let child =letter.children[i];
        let dataRu=child.getAttribute('data-ru'); 
        let dataEn=child.getAttribute('data-en');
        let dataSymbolRu= child.getAttribute('data-symbol-ru');
        let dataNumber=child.getAttribute('data-number');
        if (localStorage.getItem('lang') === 'EN' || !localStorage.getItem('lang')){
          if (typeof(dataRu)==='string'){
            child.innerHTML=dataRu
          }
          if (["\\",'/'].includes(dataNumber)){
           child.innerHTML=dataSymbolRu
          }
        }
        else{
          if (typeof(dataRu)==='string'){
            child.innerHTML=dataEn
          }
          if (["\\",'.',',',"/"].includes(dataSymbolRu)){
           child.innerHTML=dataNumber
          }
          if (['б','ю','э','ж','х','ъ','ё'].includes(dataRu)){
            child.innerHTML=dataNumber
          }
          
        }
    }
}



let shiftFuncDownUpper=function(){ 
    for(let i=0;i<letter.children.length;i++){
    let child =letter.children[i];
    let dataEn=child.getAttribute('data-en');
    let dataSymbol= child.getAttribute('data-symbol');
    let dataRu=child.getAttribute('data-ru'); 
    let dataNumber=child.getAttribute('data-number');
    let dataRuShift=child.getAttribute('data-ru-shift');
    let dataSymbolRu= child.getAttribute('data-symbol-ru');
    if(localStorage.getItem('lang') === 'RU'){

        if ( typeof(dataRu) === 'string'  ) { 
            dataRu=dataRu.toLocaleLowerCase();
            child.innerHTML=dataRu;    
          }
          if ( ['ё','х','ъ','ж','э','б','ю'].includes(dataRu) ) {
           child.innerHTML=dataRu.toLowerCase(); 
          }
          if (Number(dataNumber)||dataNumber==='0'||['-','=','/','%',"\\"].includes(dataNumber) ){
            child.innerHTML=dataSymbol;
            
          } 
          if ( ["\\",'.'].includes(dataSymbolRu) ){
            child.innerHTML=dataRuShift;
          } 
          if ( ['2','3','4','6','7'].includes(dataNumber) ){
            child.innerHTML=dataSymbolRu;
          }
          
       
   
    }
    else {
        if (typeof(dataEn)==='string'){dataEn=dataEn.toLocaleLowerCase();
            child.innerHTML=dataEn
        }
     
        if (Number(dataNumber) || dataNumber==='0' || ['-',';','=',"[","]","\\", ',','.','`','/', "'"].includes(dataNumber)){
            child.innerHTML = dataSymbol;
        }  
    }
}
}

let shiftFunUpUpper=function(){
    for(let i=0;i<letter.children.length;i++){
        let child =letter.children[i];
        let dataRu=child.getAttribute('data-ru'); 
        let dataEn=child.getAttribute('data-en');
        let dataSymbolRu= child.getAttribute('data-symbol-ru');
        let dataSymbol= child.getAttribute('data-symbol');
        let dataNumber=child.getAttribute('data-number');
        let dataRuShift=child.getAttribute('data-ru-shift');
        
        if(localStorage.getItem('lang') === 'RU'){
        
          if(['ё','х','ъ','ж','э','б','ю'].includes(dataNumber)) {
               child.innerHTML=dataNumber.toLocaleUpperCase(); 
          }
          if (['_',':','+','?','!','*','(',')','"','№',';','%','/'].includes(dataSymbol)){
                child.innerHTML=dataNumber
          }
          if (typeof(dataEn) === 'string' ){dataRu=dataRu.toUpperCase();
            child.innerHTML = dataRu;
            
          }
          if ( ['ё','х','ъ','ж','э','б','ю'].includes(dataRu))
          {
            child.innerHTML = String(dataRu).toUpperCase()
          }    
            



          if ( ['/',','].includes(dataRuShift) ) {
            child.innerHTML=dataSymbolRu;
          }
          if ( ['"','№',';',':','?'].includes(dataSymbolRu) ) {
            child.innerHTML=dataNumber;
          }
       
        }
        else {
          if (typeof(dataEn)==='string'){dataEn=dataEn.toLocaleUpperCase();
            child.innerHTML=dataEn
          }
          if (['_',':','+',"{","}","|",'<','>','~','?','!','@','#','$','%','^','&','*','(',')','"'].includes(dataSymbol)){
            child.innerHTML=dataNumber
          }
       
        }   
    }
}

let capsFuncDown=function(){ 
    for(let i=0;i<letter.children.length;i++){
        let child =letter.children[i]; 
        let dataRu=child.getAttribute('data-ru'); 
        let dataEn=child.getAttribute('data-en');
        let dataSymbol= child.getAttribute('data-symbol');
        let dataNumber=child.getAttribute('data-number'); 
    if(localStorage.getItem('lang') === 'RU') {
        if (typeof(dataRu)==='string') {
            dataRu=dataRu.toUpperCase();
            child.innerHTML=dataRu
    }

    if ( ['ё','х','ъ','ж','э','б','ю'].includes(dataNumber))
    {
       child.innerHTML = String(dataNumber).toUpperCase()
    }}

    else{ 
      if (typeof(dataEn)==='string'){dataEn=dataEn.toUpperCase();
        child.innerHTML=dataEn
      }
      if (['_',':','+',"{","}","|",'<','>','~','?','!','@','#','$','%','^','&','*','(',')','"'].includes(dataSymbol)){
         child.innerHTML=dataNumber
      }
      if ( ['ё','х','ъ','ж','э','б','ю'].includes(dataNumber))
      {
       child.innerHTML = String(dataNumber).toUpperCase()
      }
    } 


}}
let capsFunUp=function(){
    for(let i=0;i<letter.children.length;i++){
        let child =letter.children[i];
        let dataRu=child.getAttribute('data-ru'); 
        let dataEn=child.getAttribute('data-en');
        let dataSymbol= child.getAttribute('data-symbol');
        let dataNumber=child.getAttribute('data-number');
        if(localStorage.getItem('lang') === 'RU') {

            console.log('Yes')
            if (typeof(dataRu)==='string') {console.log('Yes')
                dataRu=dataRu.toLowerCase();
                child.innerHTML=dataRu
        }
    
        if ( ['ё','х','ъ','ж','э','б','ю'].includes(dataNumber))
        {
           child.innerHTML = String(dataNumber).toLowerCase()
        }}
    
        else{ 
        if (typeof(dataEn)==='string'){dataEn=dataEn.toLocaleLowerCase();
            child.innerHTML=dataEn
        }
        if (['_',':','+',"{","}","|",'<','>','~','?','!','@','#','$','%','^','&','*','(',')','"'].includes(dataSymbol)){
             child.innerHTML=dataNumber
         }
        if ( ['ё','х','ъ','ж','э','б','ю'].includes(dataNumber))
        {
          child.innerHTML = String(dataNumber).toLowerCase()
        }
    }}
}


for(let i=0;i<letter.children.length;i++){
    let child =letter.children[i];
    child.addEventListener('mousedown', function() {
        if(child.classList.contains('caps')) 
        { if (letter.children[17].innerText===letter.children[17].innerText.toUpperCase())
            {capsFunUp();
            localStorage.setItem('case','Up')}
        else{capsFuncDown();
            localStorage.setItem('case','Down') }}
        }
    );
    child.addEventListener('mousedown', function() {
        if(child.classList.contains('shift-right') || child.classList.contains('shift-left')) { 
            console.log(letter.children[18].innerText,'PROVERKA')
            console.log(letter.children[18].innerText===letter.children[18].innerText.toLowerCase())
            if (letter.children[18].innerText===letter.children[18].innerText.toLowerCase())
                {shiftFuncDown();}
            else {
                shiftFuncDownUpper();console.log(letter.children[18].innerText,'PROVERKA vnizdOWN')} 
        }
    });
    child.addEventListener('mouseup', function() {
        console.log("--> Mouse UP!!!!");
        if(child.classList.contains('shift-right')|| child.classList.contains('shift-left')) {
            if (letter.children[18].innerText===letter.children[18].innerText.toUpperCase())
                {shiftFunUp();console.log(letter.children[18].innerText,'PROVERKA vniz2')}
            else{shiftFunUpUpper();}
               
        }
    })
  }

console.log(localStorage.getItem('lang'),"FFF");  
document.addEventListener('keyup', function(event) {  

     if (event.key === 'Shift' ) {

        if (letter.children[17].innerText===letter.children[17].innerText.toUpperCase())
        {shiftFunUp();}
        else{shiftFunUpUpper();}
      }
    });
  
document.addEventListener('keydown', function(event) {    
       if (event.key === 'Shift') { 
  
        if (letter.children[17].innerText===letter.children[17].innerText.toLocaleLowerCase())
        {shiftFuncDown();}
        else{shiftFuncDownUpper();} 
      }});

document.addEventListener('keydown', function(event) { 
  if(event.key == 'CapsLock') {
    if (letter.children[17].innerText===letter.children[17].innerText.toUpperCase())
      {capsFunUp(); localStorage.setItem('case','Up')}
    else{capsFuncDown();localStorage.setItem('case','Down') } }
    
        }
    ); 

document.onkeydown=function(event){
  letter.querySelectorAll('.letter-holder .key').forEach(function(e){
   e.classList.remove('active')
  })
  letter.querySelector('.letter-holder .key[data="'+event.code+'"]').classList.add('active')
 }

letter.querySelectorAll('.letter-holder .key').forEach(function(e){
  e.onclick=function(){
    letter.querySelectorAll('.letter-holder .key').forEach(function(e){
      e.classList.remove('active');
    });
    
    this.classList.add('active');
  }
})


let enRu = {};
for (let i = 0; i < 63; i++) {
    if(!['0','1','2','3','4', '5', '6', '7', '8', '9', '-','=','Alt','Control','Shift','CapsLock','Mic','Backspace','Enter','Tab' ].includes(en[i]['small']))
    enRu[en[i]['small']] = ru[i]['small'];
}
let ruEn = {};
for (let i = 0; i < 63; i++) {
    if(!['0','1','2','3','4', '5', '6', '7', '8', '9','Alt','Control','Shift','CapsLock','Mic','Backspace','Enter','Tab' ].includes(ru[i]['small']))
    ruEn[ru[i]['small']] = en[i]['small'];
}
let isCtrl = false;
let isAlt = false;

document.addEventListener('keydown', (event) => {
        if (event.key === 'Control') {
          isCtrl = true;
        } else if (event.key === 'Alt') {
          isAlt = true;
        }
        
        if (isCtrl && isAlt) {
            console.log(localStorage.getItem('lang'));
          ctrlAltEn();
          console.log(localStorage.getItem('lang'));
          if (localStorage.getItem('lang')==='EN' || !localStorage.getItem('lang'))
            {localStorage.setItem('lang','RU')  
          }
          else {
            localStorage.setItem('lang','EN') }
        }
        console.log(localStorage.getItem('lang'));
    
     
      });
      
      document.addEventListener('keyup', (event) => {
        if (event.key === 'Control') {
          isCtrl = false;
        } else if (event.key === 'Alt') {
          isAlt = false;
        }
       
      });

  let isRussian = false;

  document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.altKey) {
        if (localStorage.getItem('lang')=== 'RU') {
          isRussian = true;
        }
        else{isRussian = false;}
      }
      
      const keyboardLayout = isRussian ? enRu : ruEn ;
      let key = keyboardLayout[event.key];
      
      console.log('key',key);
      if (key) {
        event.preventDefault();
        const value = textarea.value;
        const selectionStart = textarea.selectionStart;
        console.log('selectionStart', selectionStart);
        const selectionEnd = textarea.selectionEnd;
        console.log('selectionEnd', selectionEnd);
        console.log(value, 123);
        let newValue = value.slice(0, selectionStart) + key + value.slice(selectionEnd);
        textarea.value = newValue;
        textarea.selectionStart = textarea.selectionEnd = selectionStart + 1;
        if (capsLockOn || shiftOn) {
            key = key.toUpperCase();
          }
        
          if (key === "Enter") {
            newValue = value.slice(0, selectionStart) + "\n" + value.slice(selectionEnd);
            textarea.value = newValue;
            textarea.selectionStart = selectionEnd + 1;
            textarea.selectionEnd = selectionEnd + 1;
          } else if (key === "Backspace") {
            newValue = value.slice(0, selectionStart - 1) + value.slice(selectionEnd);
            textarea.value = newValue;
            textarea.selectionStart = selectionStart - 1;
            textarea.selectionEnd = selectionStart - 1;
          }
          else if (key === 'Shift' || key === 'CapsLock' || key === 'Alt' || key === 'Control') {
            newValue = value.slice(0, selectionStart) + ''+ value.slice(selectionEnd);
              textarea.value = newValue;
              textarea.selectionStart = selectionStart + key.length;
              textarea.selectionEnd = selectionStart + key.length;
          }
          else if (key === 'ArrowRight' ) {
              newValue = value.slice(0, selectionStart) + '→'+ value.slice(selectionEnd);
              textarea.value = newValue;
              textarea.selectionStart = selectionStart + key.length;
              textarea.selectionEnd = selectionStart + key.length;
              }
          else if (key === 'ArrowLeft') { 
              newValue = value.slice(0, selectionStart) + '←' + value.slice(selectionEnd);
              textarea.value = newValue;
              textarea.selectionStart = selectionStart + key.length;
              textarea.selectionEnd = selectionStart + key.length;
              }
          else if (key === 'ArrowDown') {
              newValue = value.slice(0, selectionStart) + '↓'+ value.slice(selectionEnd);
              textarea.value = newValue;
              textarea.selectionStart = selectionStart + key.length;
              textarea.selectionEnd = selectionStart + key.length;
              }
          else if (key === 'ArrowUp') {
              newValue = value.slice(0, selectionStart) + '↑'+ value.slice(selectionEnd);
              textarea.value = newValue;
              textarea.selectionStart = selectionStart + key.length;
              textarea.selectionEnd = selectionStart + key.length;
              }  
          else if (key === "Tab") {
            const selectedText = value.substring(selectionStart, selectionEnd);
            const beforeCursor = value.slice(0, selectionStart);
            const afterCursor = value.slice(selectionEnd);
            const tab = "  ";
            if (selectedText.length > 0) {
              newValue = beforeCursor + tab + afterCursor;
              textarea.value = newValue;
              textarea.setSelectionRange(
                beforeCursor.length + tab.length,
                beforeCursor.length + tab.length
              );
            } else {
              newValue = beforeCursor + tab + afterCursor;
              textarea.value = newValue;
              textarea.setSelectionRange(
                selectionStart + tab.length,
                selectionEnd + tab.length
              );
            }}
        
      }
  });

  let capsLockOn = false;
  let shiftOn = false;
document.addEventListener('keydown', (event) => {
    console.log(localStorage.getItem('case'),'localStorage.getItem(case)')
    console.log(event.key)



    event.preventDefault();


    var key = event.key;
  const value = textarea.value;
  const selectionStart = textarea.selectionStart;
  const selectionEnd = textarea.selectionEnd;
  let newValue;

  const capsLockOn = event.getModifierState("CapsLock");
  const shiftOn = event.shiftKey;
  let modifiedKey = key;
  if (capsLockOn || shiftOn) {
    modifiedKey = key.toUpperCase();
  }

  if (key === "Enter") {
    newValue =
      value.slice(0, selectionStart) + "\n" + value.slice(selectionEnd);
    textarea.value = newValue;
    textarea.selectionStart = selectionEnd + 1;
    textarea.selectionEnd = selectionEnd + 1;
  } else if (key === "Backspace") {
    newValue = value.slice(0, selectionStart - 1) + value.slice(selectionEnd);
    textarea.value = newValue;
    textarea.selectionStart = selectionStart - 1;
    textarea.selectionEnd = selectionStart - 1;
  }

else if (event.ctrlKey || event.altKey) {

return

}
  else if (key === 'Shift' || key === 'CapsLock' || key === 'Alt' || key === 'Control') {
    newValue = value.slice(0, selectionStart) + ''+ value.slice(selectionEnd);
    textarea.value = newValue;
    textarea.selectionStart = selectionStart + key.length;
    textarea.selectionEnd = selectionStart + key.length;
  }
  else if (key === 'ArrowRight' ) {
      newValue = value.slice(0, selectionStart) + '→'+ value.slice(selectionEnd);
      textarea.value = newValue;
      textarea.selectionStart = selectionStart + key.length;
      textarea.selectionEnd = selectionStart + key.length;
      }
  else if (key === 'ArrowLeft') { 
      newValue = value.slice(0, selectionStart) + '←' + value.slice(selectionEnd);
      textarea.value = newValue;
      textarea.selectionStart = selectionStart + key.length;
      textarea.selectionEnd = selectionStart + key.length;
      }
  else if (key === 'ArrowDown') {
      newValue = value.slice(0, selectionStart) + '↓'+ value.slice(selectionEnd);
      textarea.value = newValue;
      textarea.selectionStart = selectionStart + key.length;
      textarea.selectionEnd = selectionStart + key.length;
      }
  else if (key === 'ArrowUp') {
      newValue = value.slice(0, selectionStart) + '↑'+ value.slice(selectionEnd);
      textarea.value = newValue;
      textarea.selectionStart = selectionStart + key.length;
      textarea.selectionEnd = selectionStart + key.length;
      }  
  else if (key === "Tab") {
    const selectedText = value.substring(selectionStart, selectionEnd);
    const beforeCursor = value.slice(0, selectionStart);
    const afterCursor = value.slice(selectionEnd);
    const tab = "  ";
    if (selectedText.length > 0) {
      newValue = beforeCursor + tab + afterCursor;
      textarea.value = newValue;
      textarea.setSelectionRange(
        beforeCursor.length + tab.length,
        beforeCursor.length + tab.length
      );
    } else {
      newValue = beforeCursor + tab + afterCursor;
      textarea.value = newValue;
      textarea.setSelectionRange(
        selectionStart + tab.length,
        selectionEnd + tab.length
      );
    }
  } else {
    if(localStorage.getItem('lang') === 'RU' )
    {
        if (!localStorage.getItem('case') === 'Up') {
            modifiedKey = enRu[modifiedKey.toLocaleLowerCase()]
        }
        else{  modifiedKey = enRu[modifiedKey.toLocaleLowerCase()].toLocaleUpperCase() }
        newValue = value.slice(0, selectionStart) + modifiedKey + value.slice(selectionEnd);
      textarea.value = newValue;
      textarea.selectionStart = selectionStart + 1;
      textarea.selectionEnd = selectionStart + 1;
    }
    else
    {newValue = value.slice(0, selectionStart) + modifiedKey + value.slice(selectionEnd);
    textarea.value = newValue;
    textarea.selectionStart = selectionStart + 1;
    textarea.selectionEnd = selectionStart + 1;}
  }
});









const keyboardkey = document.querySelectorAll('.letter-holder .key');


keyboardkey.forEach((char) => {
    char.addEventListener('click', () => {
      const key = char.textContent;
      const cursorPos = textarea.selectionStart;
      if (key === 'Enter') {
        textarea.value = textarea.value.substring(0, cursorPos) + '\n' + textarea.value.slice(cursorPos);
        textarea.setSelectionRange(cursorPos + 1, cursorPos + 1);
      } 
      else if (key === 'Backspace') {
        if (cursorPos > 0) {
          textarea.value = textarea.value.substring(0, cursorPos - 1) + textarea.value.slice(cursorPos);
          textarea.setSelectionRange(cursorPos - 1, cursorPos - 1);
        }
      }
      else if (key === 'CapsLock'||key==='Shift') {
        textarea.value = textarea.value.substring(0, cursorPos) + '' + textarea.value.slice(cursorPos);
        textarea.setSelectionRange(cursorPos + 1, cursorPos + 1); }
      else if (key === 'Tab') {
        const selectedText = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);
        const beforeCursor = textarea.value.slice(0, textarea.selectionStart);
        const afterCursor = textarea.value.slice(textarea.selectionEnd);
        const tab = '    '; 
        
        if (selectedText.length > 0) {
          const newText = beforeCursor + tab + afterCursor;
          textarea.value = newText;
          textarea.setSelectionRange(beforeCursor.length + tab.length, beforeCursor.length + tab.length);
        } else {
          const newText = beforeCursor + tab + afterCursor;
          textarea.value = newText;
          textarea.setSelectionRange(textarea.selectionStart + tab.length, textarea.selectionEnd + tab.length);
        }
      }
      else {
        textarea.value = textarea.value.substring(0, cursorPos) + key + textarea.value.slice(cursorPos);
        textarea.setSelectionRange(cursorPos + 1, cursorPos + 1);
      }
    
    })
    })
    
    


})
();