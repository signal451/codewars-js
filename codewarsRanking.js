class User {

    constructor() {
        // let status = {
        //     user_rank: -8,
        //     user_progress: 0
        // }
        this.rank = -8;
        this.total = 0;
        this.progress = 0;
        this.bonusProgress = 0;
    }

    // vscode Debug hiij surah
    // trash code ... 

    incProgress(kataRank) { 
       // ene systemee zasah ...  
       const rankList = [-8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8];
       if(rankList.indexOf(kataRank) === -1) throw 'Rank value not found'
       if(this.rank === 8) {
            this.progress + 0; 
            return;
       }     
       let sum = 10 * Math.abs(this.rank - kataRank) * Math.abs(this.rank - kataRank);
       this.total += sum;
       if(sum >= 100) {
           // umnuh bodlogiin progress bugd compound hiij yvna ;-; tag martaash bsda 
           let LVLmultiply = sum / 100;
           if(LVLmultiply > 1) {
               
              let rankUp =  Math.floor(Math.abs(LVLmultiply));

               while(rankUp > 0){
                   rankUp--;
                   if(rankUp == -1) {
                        this.rank += 1;
                        this.progress += 10;
                   }
                   this.rank += 1;
               }    
               this.bonusProgress += (Math.abs(LVLmultiply) - Math.floor(Math.abs(LVLmultiply))) * 100;
               
               if(this.bonusProgress + this.progress >= 100) {
                   this.rank += 1;
                   this.progress = (this.progress + this.bonusProgress) - 100;
                   this.bonusProgress = 0;
               }
           }
           else {
               this.rank += 1;
               let temp = Math.abs(LVLmultiply) * 100;
               temp > 100 ?  this.progress += temp - 100 : this.progress = 0;
           }

       }
       this.progress += sum;
       if(this.progress >= 100) {
           this.rank += 1;
           this.progress -= 100;
       }
    }


    userStatus() {
        return `user rank: ${this.rank} & user progress: ${this.progress} & user total progress: ${this.total}`
    }
}


// odoo shalgah ystoi ym ni rank 0 gej baihgue geer ahih -1 ees lvl up hiih 1 boloh uyed +10 progress
// mun 


const user = new User();


