const url = (window.location.hostname.includes('localhost')) ?
    'http://localhost:63342/ValensLaw/' :
    'https://valenslawfirm.com/'

if (location) {
    if (/^https:\/\/valenslawfirm.com\/assets\/[^\/]+\/?$/.test(location.href) ||
        /^http:\/\/valenslawfirm.com\/assets\/[^\/]+\/?$/.test(location.href)) {
        window.location.href = 'https://valenslawfirm.com/';
    }
}