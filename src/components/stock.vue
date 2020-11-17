<template>
    <div>
		<input type="text" id="test1" v-model="m">
		<input type="text" id="test2" v-model="de">
		<button @click="up">올라라</button>
		<button @click="down">내려라</button>
        <div class="">{{ cal }}</div>
	</div>
</template>

<script>
export default {
    name : 'Stock',
    data(){
        return {
			de: 5000,
			per : 0.03,
			m : 5
        }
    },
    computed : {
        cal : function (){
            var de1 = Number(this.de);
            var per1 = Number(this.per);
            var y = Number(this.m * 12);
            for(var i=1; i<=y ; i++){		
                de1 = de1 + (de1*per1);
                if(i%12 == 0){
                    de1 = de1+1500;
                }	
            }
            return de1;            
        }
    },
    methods : {
        up : function(){
            this.m++;
            console.log(this.m);
        },
        down : function (){
            this.m--;
            console.log(this.m);
        }
    }
}
</script>