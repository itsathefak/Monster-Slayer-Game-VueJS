function getRandomValue (min, max){
    Math.floor( Math.random() * (max-min)) + min; //Calculate the Min and Max damage made by player and monster
}

const app = Vue.createApp({
    data(){
        return{
            playerHealth: 100,
            monsterHealth: 100
        }
    },
    methods:{
        attackMonster(){ //Calculate the damage for the moster
        const attackValue = getRandomValue(5, 12) //Add that Min and Max val
        this.mosterHealth -= attackValue;
        this.attackPlayer();
    },
        attackPlayer(){ //Calculate the damage for the player
        const attackValue = getRandomValue(8, 15) //Add that Min and Max val
        this.playerHealth -= attackValue;
        }
    }
})

app.mount("#game")