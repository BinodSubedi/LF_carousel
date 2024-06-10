class CarouselElement{

    private images:string[];
    private toggleSwitcher = 1;

    constructor(images:string[]){
        this.images = images;
    }

    elementBuilder(): string {

        return `<div class='carousel-container'>

        <div class='carousel-container__inner'>
        
        </div>
      
        <div class='carousel__quick-move'>

        <div id='quick-move__left'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#CCCCCC" class='arrow-back'><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg></div>

        ${this.images.map((_, id) => {

            return `<div class='quick-move__toggler' id='quick-move-${id+1}' ></div>`

        })
            }



        <div id='quick-move__right'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#CCCCCC" class='arrow-forward'><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg></div>


        </div>

    </div>`;


    }

    imageAppender() {

        const container: HTMLElement | null = document.querySelector('.carousel-container__inner');

       
        // const toggler : HTMLElement | null = document.querySelector(`#quick-move-${toggleSwitcher}`);

        // toggler!.classList.add('active-toggler');

        this.images.forEach((el, id) => {

            const imageItem: HTMLImageElement = document.createElement('img');
            imageItem.src = `/images/${el}`;
            imageItem.classList.add('carousel__image');
            imageItem.id = `carousel-img-${id + 1}`

            container!.appendChild(imageItem);

        })



        // let toggleSwitcher = 1;

        document.querySelector('#quick-move-1')?.classList.add('active-toggler')

        const imageContainer: HTMLElement | null = document.querySelector('.carousel-container__inner')


        setInterval(() => {

            const toggler_back: HTMLElement | null = document.querySelector(`#quick-move-${this.toggleSwitcher}`);

            toggler_back?.classList.toggle('active-toggler');

            if (this.toggleSwitcher < this.images.length) {

                // console.log(this.toggleSwitcher)



                this.toggleSwitcher++;

                imageContainer!.style.left = `-${(this.toggleSwitcher-1) * 100}%`;



            }else if(this.toggleSwitcher == this.images.length){
                this.toggleSwitcher = 1;

                imageContainer!.style.left = '0%';


            }

            const toggler_forward: HTMLElement | null = document.querySelector(`#quick-move-${this.toggleSwitcher}`);

            toggler_forward!.classList.toggle('active-toggler');

        },8000)



        const serialEventListenerEl  = Array.from(document.querySelector('.carousel__quick-move')!.childNodes);

        // console.log(serialEventListenerEl);

        serialEventListenerEl.forEach((el,i)=>{
            if((i+1)%2 == 0){
                // console.log(el);

                if(i == 1){
                    el.addEventListener('click',()=>{
                        if (this.toggleSwitcher > 1) {
                            document.querySelector(`#quick-move-${this.toggleSwitcher}`)?.classList.toggle('active-toggler')
                            this.toggleSwitcher--;
                            imageContainer!.style.left = `-${(this.toggleSwitcher - 1) * 100}%`;
                            document.querySelector(`#quick-move-${this.toggleSwitcher}`)?.classList.toggle('active-toggler');
                        }
                    })
                }
                else if (i == serialEventListenerEl.length - 2) {

                    // console.log('required el::',el);

                    el.addEventListener('click', () => {
                        if (this.toggleSwitcher < (this.images.length)) {

                            document.querySelector(`#quick-move-${this.toggleSwitcher}`)?.classList.toggle('active-toggler')
                            this.toggleSwitcher++;
                            imageContainer!.style.left = `-${(this.toggleSwitcher - 1) * 100}%`;
                            document.querySelector(`#quick-move-${this.toggleSwitcher}`)?.classList.toggle('active-toggler')

                        }
                    })


                }else{
                    el.addEventListener('click',(e)=>{
                        const el : any = e.target;

                        const id = el.id.split('-').pop();

                        document.querySelector(`#quick-move-${this.toggleSwitcher}`)?.classList.toggle('active-toggler')
                        this.toggleSwitcher = id;

                        document.querySelector(`#quick-move-${this.toggleSwitcher}`)?.classList.toggle('active-toggler')
                        imageContainer!.style.left = `-${(this.toggleSwitcher - 1) * 100}%`;


                    })
                }
            }
        })

    }
}



export default CarouselElement