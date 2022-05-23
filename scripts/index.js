let loginData = JSON.parse(localStorage.getItem("loginData"))
    if(loginData!=null)
    {
        let movieArr = ["https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_AcharayaMultiLanguage_Launch/8b4088ed-a875-456a-89fa-62dfdcdaca80._UR3000,600_SX1500_FMwebp_.jpeg","https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_KGF2/1841a3b8-9dd4-4493-8c54-f54584975510._UR3000,600_SX1500_FMwebp_.jpeg","https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_BachchanPandeyNewPoster_Launch/c6ccb896-fd15-4079-ba1a-66fa0c1f060b._UR3000,600_SX1500_FMwebp_.jpeg"]
        let i=0
        setInterval(slideshow,2000)
        let initial_img = document.createElement("img")
        initial_img.src = movieArr[0]
        document.getElementById("slideshow").append(initial_img)
        i=i+1

        function slideshow(){
            document.getElementById("slideshow").innerHTML = null
            if(i===movieArr.length) i=0;
            // console.log(movieArr[i])
            let img = document.createElement("img")
            img.src = movieArr[i]
            document.getElementById("slideshow").append(img)
            i=i+1;
        }
        document.getElementById("sort-hl").addEventListener("click",sort_hl)
        document.getElementById("sort-lh").addEventListener("click",sort_lh)

        function sort_hl(){
            console.log("triggered")
            let sortDatahl = JSON.parse(localStorage.getItem("movies"))

            sortDatahl.sort( function( a,b){
                if(a.ImdbRating > b.ImdbRating) return -1;
                if(a.ImdbRating < b.ImdbRating) return 1;
                return 0;
            });
            console.log(sortDatahl)
                display(sortDatahl)
            




        }
        function sort_lh()
        {
            console.log("triggered")
            let sortDatahl = JSON.parse(localStorage.getItem("movies"))

            sortDatahl.sort( function( a,b){
                if(a.ImdbRating > b.ImdbRating) return 1;
                if(a.ImdbRating < b.ImdbRating) return -1;
                return 0;
            });
            console.log(sortDatahl)
                display(sortDatahl)
            
        }

        let displayArr = []

        function Movies(m,y,url,r,d,l,c){
            this.movieName = m;
            this.release = y;
            this.poster = url;
            this.ImdbRating = r;
            this.duration = d;
            this.language = l;
            this.censorRating = c;
            displayArr.push(this)
        }

        let m1 = new Movies("Radheshyam",2022,"https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/14d3cd8f9d5bd14eeaceb9edc99c5bcb073eb53142446d0a00f75e9da9126c5a._UR1920,1080_RI_SX356_FMwebp_.jpg",2.5,"2h 15min","Telugu","U/A 13+","")
        let m2 = new Movies("Pushpa",2022,"https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/cf6c3029b025a0261f67da1f92678c39e9b72c354b00e9f677111412604e98d8._UR1920,1080_RI_SX356_FMwebp_.jpg",4 ,"2h 56min","Telugu","A 18+")
        let m3 = new Movies("Pushpa",2022,"https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/71bdd34694ebe6353c17b9dfbae07b08ac926fb7c4f23f562c97c57b98206c29._UR1920,1080_RI_SX356_FMwebp_.jpg",1 ,"2h 56min","Telugu","A 18+")
        let m4 = new Movies("Pushpa",2022,"https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/cf3c3defac82a558e3f4296796bb891e5addc954fe28a1f6e8615f2a6787bbcf._UR1920,1080_RI_SX356_FMwebp_.jpg",2.4 ,"2h 56min","Telugu","A 18+")
        let m5 = new Movies("Pushpa",2022,"https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/d2e5d9cf914362adc3d15129d5a4ce30a79e966473fa4924ef96251330842f21._UR1920,1080_RI_SX356_FMwebp_.jpg",2.2,"2h 56min","Telugu","A 18+")
        let m6 = new Movies("Pushpa",2022,"https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/e4e22ed879e891b741deb2c98b29fbb7ff2b78db9a66d3dc88c71a7e0f9f155c._UR1920,1080_RI_SX356_FMwebp_.jpg",5 ,"2h 56min","Telugu","A 18+")
        let m7 = new Movies("Pushpa",2022,"https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/e4e22ed879e891b741deb2c98b29fbb7ff2b78db9a66d3dc88c71a7e0f9f155c._UR1920,1080_RI_SX356_FMwebp_.jpg",4.6 ,"2h 56min","Telugu","A 18+")
        let m8 = new Movies("Pushpa",2022,"https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/7636739136a9c97a7c1062641163b89edd73d5033482bc3a3fcc20df3b34d638._UR1920,1080_RI_SX356_FMwebp_.jpg",4.7 ,"2h 56min","Telugu","A 18+")
        let m9 = new Movies("Pushpa",2022,"https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/b071419c0215fe96919315a1f55f1fce6caba9b7cf00d5db73acecda980b3b77._UR1920,1080_RI_SX356_FMwebp_.jpg",3.8 ,"2h 56min","Telugu","A 18+")
        let m10 = new Movies("Pushpa",2022,"https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/cf6c3029b025a0261f67da1f92678c39e9b72c354b00e9f677111412604e98d8._UR1920,1080_RI_SX356_FMwebp_.jpg",4.1 ,"2h 56min","Telugu","A 18+")
        console.log(displayArr)
        function display(data){
            document.getElementById("movies").innerHTML = null
            data.forEach(function(el){
                let div1 = document.createElement("div")
                let img = document.createElement("img")
                img.src = el.poster;
                let h3 = document.createElement("h3")
                h3.innerText = el.movieName;
                let p = document.createElement("p")
                p.innerText = el.release;
                let span1 = document.createElement("span")
                span1.innerText = el.ImdbRating;
                let span2 = document.createElement("span")
                span2.innerText = el.language;
                let p1 = document.createElement("p")
                p1.innerText = el.censorRating;
                div1.append(img,h3,p,span1,span2,p1)
                document.getElementById("movies").append(div1)

            })

        }
        localStorage.setItem("movies",JSON.stringify(displayArr))
        display(displayArr)
            
            




         







    }