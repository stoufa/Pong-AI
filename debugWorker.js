onmessage=function(a){switch(a.data.type){case "log":console.log(a.data.content);break;case "error":console.error(a.data.content);break;default:console.error("Invalid message type : "+a.data.content)}};