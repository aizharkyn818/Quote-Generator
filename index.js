function displayDate(){
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    document.getElementById('displayDate').textContent = date;
    document.getElementById('displayTime').textContent = time;
}
setInterval(displayDate,1000);

const quotes = [' Life is about making an impact, not making an income.<br> --Kevin Kruse', 'Whatever the mind of man can conceive and believe, it can achieve.<br> –Napoleon Hill', 'Strive not to be a success, but rather to be of value.<br> –Albert Einstein', 
'Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference. <br> –Robert Frost','I attribute my success to this: I never gave or took any excuse.<br> –Florence Nightingale', 
'The most difficult thing is the decision to act, the rest is merely tenacity.<br> –Amelia Earhart','Every strike brings me closer to the next home run.<br> –Babe Ruth', 
'Definiteness of purpose is the starting point of all achievement.<br> –W. Clement Stone', 'Life isn\'t about getting and having, it\'s about giving and being. <br> –Kevin Kruse',' Life is what happens to you while you’re busy making other plans.<br> –John Lennon',
'We become what we think about. –Earl Nightingale', 'Life is 10% what happens to me and 90% of how I react to it. –Charles Swindoll', 'The most common way people give up their power is by thinking they don’t have any. –Alice Walker',
'The mind is everything. What you think you become. <br> –Buddha','The best time to plant a tree was 20 years ago. The second best time is now.<br> –Chinese Proverb',
'Eighty percent of success is showing up. –Woody Allen', 'Winning isn’t everything, but wanting to win is.<br> –Vince Lombardi', ' Your time is limited, so don’t waste it living someone else’s life.<br> –Steve Jobs', 'I am not a product of my circumstances. I am a product of my decisions.<br> –Stephen Covey',
'Either you run the day, or the day runs you.<br> –Jim Rohn', 'The two most important days in your life are the day you are born and the day you find out why.<br> –Mark Twain', 'The best revenge is massive success. <br> –Frank Sinatra', 'Life shrinks or expands in proportion to one\'s courage.<br> –Anais Nin',
'There is only one way to avoid criticism: do nothing, say nothing, and be nothing.<br> –Aristotle','The only person you are destined to become is the person you decide to be.<br> –Ralph Waldo Emerson','Believe you can and you’re halfway there.<br> –Theodore Roosevelt'];

function randomQuote(){
    let newQuote= Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteList').innerHTML = quotes[newQuote];
}
function makeSound(url){
    new Audio(url).play();
}
let quoteButton= document.querySelector('.quoteButton');
quoteButton.addEventListener('click', function (){
    randomQuote();
    makeSound('public/sparkle.wav');
})






