const project = document.getElementById('text1')
const description = document.getElementById('text2')
const timer = document.getElementById('time')
const tab = document.getElementById('table')
const p = document.getElementById('para')
const st = document.getElementById('start')

let intervalid
const seconds = document.getElementById('seconds')
const minutes = document.getElementById('minutes')
const hours = document.getElementById('hours')

function startclick(){
    if(st.textContent === 'Start'){
    let s = 0
    let m = 0
    let h = 0
    intervalid = setInterval(function(){
        s++
        if(s>=60)
        {
            s = 0
            m++
        }
        if(m>=60){
            m = 0
            h++
        }
        seconds.textContent = s.toString().padStart(2,'0')
        minutes.textContent = m.toString().padStart(2,'0')
        hours.textContent = h.toString().padStart(2,'0')
    }, 1000)
    st.textContent = 'Stop'
    st.style.setProperty('background-color','red')
}
    else if(st.textContent === 'Stop'){
        tab.innerHTML+=`<tr>
        <td>${project.value}</td>
        <td>${description.value}</td>
        <td> ${p.textContent} </td>
      </tr>`
      project.value=""
      description.value=""
        clearInterval(intervalid)
        st.style.setProperty('background-color','rgb(17, 138, 219)')
        st.textContent = 'Start'
    }
}
st.addEventListener('click',startclick)




