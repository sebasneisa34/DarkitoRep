const panels = document.querySelectorAll(".panel")

panels.forEach(panel => {
    panel.addEventListener('click',() => {
        
    })
})

const removeActiveClasses = () => {
    panels.forEach (panel => {
        panel.classList.remove('active')
    })
} 