// Store 20 quotes in an array
var quotes = [
	{content: "Those who can make you believe absurdities can make you commit atrocities.", source: "-Voltair"},
	{content: "The purpose of art is washing the dust of daily life off our souls.", source: "-Picasso"},
	{content: "I expand in abundance, success and love every day, as I inspire those around me to do the same.", source: "-Gay Hendricks"},
	{content: "The best portion of your life will be the small, nameless moments you spend smiling with someone who matters to you.", source: "-Anonymous"},
	{content: "Here's to the nights that turned into mornings with the friends that turned into family.", source: "-Anonymous"},
	{content: "The friend in my adversity I shall always cherish most. I can better trust those who helped to relieve the gloom of my dark hours than those who are so ready to enjoy with me the sunshine of my prosperity.", source: "-Ulysses S. Grant"},
	{content: "The things we take for granted every day, someone else is praying for every night.", source: "-Brittani Brown"},
	{content: "Don’t ever let someone tell you that you can’t do something. Not even me. You got a dream, you gotta protect it. When people can’t do something themselves, they’re gonna tell you that you can’t do it. You want something, go get it. Period.", source: "-Will Smith"},
	{content: "He who knows and does not know that he knows:\nHe is asleep. Let him become one, whole. Let him be awakened.\nHe who has known but does not know:\nLet him see once more the beginning of all.\nHe who does not wish to know, and yet says that he needs to know:\nLet him be guided to safety and to light.\nHe who does not know, and knows that he does not know:\nLet him, through this knowledge, know", source: "-Sarmoung Teachings"},
	{content: "Lend me your hand and we'll conquer them all\nBut lend me your heart and I'll just let you fall\nLend me your eyes I can change what you see\nBut your soul you must keep, totally free.", source: "-Mumford & Sons"},
	{content: "If equal affection cannot be, let the more loving one be me.", source: "-W. H. Auden"},
	{content: "She was becoming herself and daily casting aside that fictitious self which we assume like a garment with which to appear before the world.", source: "-Kate Chopin"},
	{content: "We cross our bridges as we come to them and burn them behind us, with nothing to show for our progress except a memory of the smell of smoke, and the presumption that once our eyes watered.", source: "-Tom Stoppard"},
	{content: "The half life of love is forever.", source: "-Junot Diaz"},
	{content: "I could hear the human noise we sat there making, not one of us moving, not even when the room went dark.", source: "-Raymond Carver"},
	{content: "I would always rather be happy than dignified.", source: "-Charlotte Brontë"},
	{content: "I have spread my dreams under your feet;\nTread softly because you tread on my dreams", source: "-W. B. Yeats"},
	{content: "I wondered if that was how forgiveness budded; not with the fanfare of epiphany, but with pain gathering its things, packing up, and slipping away unannounced in the middle of the night.", source: "-Khaled Hosseini"},
	{content: "So we beat on, boats against the current, borne back ceaselessly into the past.", source: "-F. Scott Fitzgerald"},
	{content: "Journeys end in lovers meeting.", source: "-William Shakespeare"},
	{content: "It does not do well to dwell on dreams and forget to live. Remember that.", source: "J.K. Rowling"},
	{content: "If you want to find the secrets of the universe, you should think in terms of energy, frequency, and vibrations.", source: "Nikola Tesla"},
	{content: "The most important day of your life is the day you’re born, and the second is when you realize why.", source: "Mark Twain"},
	{content: "Like all great travellers, I have seen more than I remember, and remember more than I have seen.", source: "Benjamin Disraeli"},
	{content: "Achievement is the product of talent and effort, the latter a function of the intensity, direction, and duration of one’s exertions towards a long-term goal.", source: "Angela Duckworth"},
	{content: "Women who seek to be equal with men lack ambition.", source: "Timothy Leary"},
	{content: "It is better to fail in originality than to succeed in imitation.", source: "Herman Melville"},
]

var getQuote = function(){
	// Generate random number within array length
	var randomNumber = Math.floor(Math.random() * quotes.length + 1);

	// Use random number to pick quote/author & assign to variables
	var quoteContent = quotes[randomNumber].content;
	var quoteSource = quotes[randomNumber].source;

	// Append quote/author to paragraph
	document.getElementById("quote-text").innerText = quoteContent;
	document.getElementById("quote-source").innerText = quoteSource;

	// Send to Tweet button
	$(".twitter-share-button").attr("href", 'https://twitter.com/intent/tweet?text=' + quoteContent + " " + quoteSource);
}

getQuote();
