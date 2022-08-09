const getRandomValue =  (min, max) => {
 return Math.floor(Math.random() * (max - min) + min)
}
const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            logs: [],
        }
    },
    methods: {
        attackMonster() {
            this.currentRound += 1 
           const attackValue = getRandomValue(5, 12)
            this.monsterHealth -= attackValue
            this.addLogs('You', 'Attack', attackValue)
            this.attackPlayer()
        },
        attackPlayer() {
           const attackValue = getRandomValue(8, 15)
            this.playerHealth -= attackValue
            this.addLogs('Monster', 'Attack', attackValue)
        },
        specialAttackMonster() {
            this.currentRound += 1
            const attackValue = getRandomValue(10, 25)
            this.monsterHealth -= attackValue
            this.addLogs('You', 'Special Attack', attackValue)
            this.attackPlayer()
        }, 
        healPlayer() {
            this.currentRound += 1
            const healValue = getRandomValue(8, 20)
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100
            } else {
                this.playerHealth += healValue
            }
            this.addLogs('You', 'Heal', healValue)
            this.attackPlayer()
        },
        resetGame() {
            this.playerHealth = 100
            this.monsterHealth =  100
            this.currentRound = 0
            this.logs = []
        },
        surrender() {
            this.playerHealth = 0
            this.addLogs('You', 'Surrender', 0)
        },
        addLogs(who, what, value) {
            this.logs.unshift({actionBy: who, actionType: what, actionValue: value})
        },
    },
    computed: {
        monsterBarStyle() {
            return {width: this.monsterHealth + '%'}
        },
        playerBarStyle() {
            return {width: this.playerHealth + '%'}
        },
        shouldAttackBtnDisabled() {
            return this.playerHealth <= 0 || this.monsterHealth <= 0
        },
        shouldSpecialAttackBtnDisabled() {
            return this.currentRound % 3 !== 0
        }
    },
    watch: {
        playerHealth() {
            if (this.playerHealth <= 0 && this.monsterHealth > 0) {
                console.log(this.playerHealth, 'this.playerHealth')
                return alert('Monster Wins!')
            } else if (this.playerHealth <= 0 && this.monsterHealth <= 0) {
                alert('DRAW!')
            }

        }, 
        monsterHealth() { 
            if (this.monsterHealth <= 0 && this.playerHealth > 0 ) {
                console.log(this.monsterHealth, 'this.monsterHealth')
                return alert('You Win!')
            } else if (this.playerHealth <= 0 && this.monsterHealth <= 0) {
                alert('DRAW!')
            }
        },

    }
})
app.mount('#game')