function descobrir(){
    let res = document.getElementById('res')
    let tam = document.getElementById('tamanho').value
    let agua = document.getElementById('agua').value
    let sol = document.getElementById('sol').value
    let foto = document.getElementsByClassName('foto')

        res.innerHTML = "";
        for(let i = 0; i < plantas.length; i++){
            foto = `<figure><img src="${plantas[i].foto.url}" alt="${plantas[i].foto.legenda}"><figcaption id="legenda">${plantas[i].scname}</figcaption></figure>`
            if (tam == 'indif'){
                if (sol == 'comsol' && plantas[i].sol == 'sim'){
                    if(agua == '7x' && plantas[i].agua == '7x')
                        res.innerHTML += ` ${foto} `;
                    if(agua == '2x' && plantas[i].agua == '2x')
                        res.innerHTML += ` ${foto} `;
                    if(agua == '1x' && plantas[i].agua == '1x')
                        res.innerHTML += ` ${foto} `;
                }
                else if (sol == 'semmsol' || plantas[i].sol == 'nao'){
                    if(agua == '7x' && plantas[i].agua == '7x')
                        res.innerHTML += ` ${foto} `;
                    if(agua == '2x' && plantas[i].agua == '2x')
                        res.innerHTML += ` ${foto} `;
                    if(agua == '1x' && plantas[i].agua == '1x')
                        res.innerHTML += ` ${foto} `;
                }
        }
            else if (tam == 'grande' && plantas[i].tam == 'grande'){
                if (sol == 'comsol' && plantas[i].sol == 'sim'){
                    if(agua == '7x' && plantas[i].agua == '7x')
                        res.innerHTML += `${foto}`;
                    if(agua == '2x' && plantas[i].agua == '2x')
                        res.innerHTML += ` ${foto} `;
                    if(agua == '1x' && plantas[i].agua == '1x')
                        res.innerHTML += ` ${foto} `;
            }
            else if (sol == 'semmsol' || plantas[i].sol == 'nao'){
                if(agua == '7x' && plantas[i].agua == '7x')
                    res.innerHTML += ` ${foto} `;
                if(agua == '2x' && plantas[i].agua == '2x'){
                    res.innerHTML += ` ${foto} `;
                }
                if(agua == '1x' && plantas[i].agua == '1x')
                    res.innerHTML += ` ${foto} `;
            }
        }
        if (tam == 'peq' && plantas[i].tam == 'pequenas'){
            if (sol == 'comsol' && plantas[i].sol == 'sim'){
                if(agua == '7x' && plantas[i].agua == '7x')
                    res.innerHTML += ` ${foto} `;
                if(agua == '2x' && plantas[i].agua == '2x')
                    res.innerHTML += ` ${foto} `;
                if(agua == '1x' && plantas[i].agua == '1x')
                    res.innerHTML += ` ${foto} `;
            }
            else if (sol == 'semmsol' || plantas[i].sol == 'nao'){
                if(agua == '7x' && plantas[i].agua == '7x')
                    res.innerHTML += ` ${foto} `;
                if(agua == '2x' && plantas[i].agua == '2x')
                    res.innerHTML += ` ${foto} `;
                if(agua == '1x' && plantas[i].agua == '1x')
                    res.innerHTML += ` ${foto} `;
            }
        }
    }
}