const sound = {
	audio:[],
	index:0,
	init:()=>{
		for(let i=0;i<8;i++){
			sound.audio.push(new Audio(sound.data_uri));
		}
	},
	play:()=>{
		sound.audio[sound.index%sound.audio.length].play();
		sound.index += 1;
	},
	data_uri:"data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU2LjQwLjEwMQAAAAAAAAAAAAAA//NwwAAAAAAAAAAAAEluZm8AAAAPAAAADgAAAiQAYWFhYWFhYW1tbW1tbW15eXl5eXl5hoaGhoaGhpKSkpKSkpKenp6enp6eqqqqqqqqqra2tra2tra2wsLCwsLCws/Pz8/Pz8/b29vb29vb5+fn5+fn5/Pz8/Pz8/P/////////AAAAAExhdmM1Ni42MAAAAAAAAAAAAAAAACQAAAAAAAAAAAIkrpFKWwAAAAAAAAAAAAAAAAD/8xDEAALIAqgBQBAA//8/WH///UCAIAgq///zEsQBAzlK2AGAEAD/yvo+C///8WX5fwX/yP/zEMQCA2k+rAHAUACBbNb/q////0JgUmqH//MQxAEDATqsCAAOcMIP/ikVK3///icOwD7/8xDEAgNROqAQABpwNf/0AGSe///+M5Bq+P/zEMQBAwk6kAAAGnB+f/zIJd////h9KNX4//MQxAECyTqMAAAUcA7/8qEj2///g6eq+EX/8xDEAgNJOoQAA1UAn/8gAAmd///4OifVEP/zEMQBAuk6nDAADnBB8Bv/4a////FIeleB//MSxAIDETp8AANVCEZ//MQ3G///+wdq+Ai3//MQxAMC0TqAAAKPAP5QFf///xMGqv/cJv//8xDEBALhOowBQDgA54Pv///xMXr/768Ic//zEMQFA9kWhAGAOADqb8VjB+pv/4jdFUxB//MQxAIAAANIAcAAAE1FMy45OS41VVVVVVU=",
};
