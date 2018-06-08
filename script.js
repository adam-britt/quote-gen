$(document).ready(function() {
	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	});
});

// Store 20 quotes in an array
var quotes = [
	{content: "Quote", source: "-Author"},
	{content: "Quote", source: "-Author"},
	{content: "Quote", source: "-Author"},
	{content: "Quote", source: "-Author"},
	{content: "Quote", source: "-Author"},
	{content: "Quote", source: "-Author"},
	{content: "Quote", source: "-Author"},
	{content: "Quote", source: "-Author"},
	{content: "Quote", source: "-Author"},
	{content: "Quote", source: "-Author"},
	{content: "Quote", source: "-Author"},
	{content: "Quote", source: "-Author"},
	{content: "Quote", source: "-Author"},
	{content: "Quote", source: "-Author"},
	{content: "Quote", source: "-Author"},
	{content: "Quote", source: "-Author"},
	{content: "Quote", source: "-Author"},
	{content: "Quote", source: "-Author"},
	{content: "Quote", source: "-Author"},
	{content: "Quote", source: "-Author"},
]

function getQuote() {
	// Generate random number within array length
	var randomNumber = Math.floor(Math.random() * quotes.length + 1);

	// Use random number to pick quote/author & assign to variables
	var quoteContent = quotes[randomNumber].content;
	var quoteSource = quotes[randomNumber].source;

	// Append quote/author to paragraph
	document.getElementById("quote-text").innerHTML = quoteContent;
	document.getElementById("quote-source").innerHTML = quoteSource;

	// Send to Tweet button
	$(".twitter-share-button").attr("href", 'https://twitter.com/intent/tweet?text=' + quoteContent + " " + quoteSource);
}

