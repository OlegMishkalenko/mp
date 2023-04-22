import Info from "./info.js"

const Generate = () => {

    let { partner, photo, video } = Info()

    video.reverse()
    photo.reverse()
    //__PARTNER___
    const parnerBlock = document.querySelector(".ul__about")
    partner.map( (i) => {
        parnerBlock.innerHTML += `
        <li class="li__about">
            <a
                href="${i.link}"
                class="a__about"
                alt="${i.title}"
                title="${i.title}"
                target="_blank"
            >
                <img 
                    src="${i.img}"
                    loading="lazy"
                />
            </a>
        </li> `  
    })

    

    //___PHOTO____    
    const wind = document.querySelector(".window__img")
    const photoBlock = document.querySelector(".block__photo")
    const photobtn = document.querySelector(".btn__photo")
    let countP = 0
    const photoMaker = (i) => {
        for( i ; i < countP+5; i++ ) {
            if (photo[i]) {
                photoBlock.innerHTML += `
                <li class="li__photo">
                    <img 
                        src="${photo[i]}"
                        alt="Фото ${i+1}"
                        title="Фото ${i+1}"
                        loading="lazy"
                    />
                </li> `  
            }
        }
        if ( countP + 5 < photo.length ) {
            countP += 5
        } else {
            photobtn.style.display = "none";
        }
    } 
    photoMaker(0)
    photobtn.addEventListener("click", e => {
        photoMaker(countP)

    })
    //__open_&_close__photo_
    photoBlock.addEventListener("click", e => {
        if (e.target.tagName === "IMG") {
            wind.style.display = "flex"
            wind.querySelector("img").src = e.target.src
            document.body.style.overflowY = "hidden"
        }
    })  
    wind.addEventListener("click", e => { 
        if (e.target.tagName !== "IMG") {
            wind.style.display = "none"
            document.body.style.overflowY = "auto"
        }
    })
    //___VIDEO____
    const videoBlock = document.querySelector(".block__video")
    const videobtn = document.querySelector(".btn__video")
    let countV = 0
    const videoMaker = (i) => {
        for( i ; i < countV+3; i++ ) {
            if (video[i]) {
                videoBlock.innerHTML += `
                <li class="li__video">
                    <iframe 
                        class="iframe__video"
                        src="${video[i]}" 
                        title="YouTube видео ${i+1}" 
                        alt="YouTube видео ${i+1}" 
                        loading="lazy" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen>
                    </iframe>  
                </li> `  
            }
        }
        if ( countV + 3 < video.length ) {
            countV += 3
        } else {
            videobtn.style.display = "none";
        }
    } 
    videoMaker(0)

    videobtn.addEventListener("click", e => {
        videoMaker(countV)

    })

}

export default Generate

