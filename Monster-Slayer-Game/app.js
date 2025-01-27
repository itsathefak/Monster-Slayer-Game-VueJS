function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; // Add +1 to include max value
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100
        }
    },
    computed: {
        monsterBarStyles() {
            return { width: this.monsterHealth + '%' }
        },
        playerBarStyles() {
            return { width: this.playerHealth + '%' }
        }
    },
    methods: {
        attackMonster() {
            const attackValue = getRandomValue(5, 12); // Min-Max damage for the monster
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = getRandomValue(8, 15); // Min-Max damage for the player
            this.playerHealth -= attackValue;
        }
    }
});

app.mount("#game");
