const url = (window.location.hostname.includes('localhost')) ?
    'http://localhost:63342/ValensLaw/' :
    'https://valens-5694a.web.app/'

if (location) {
    if (/^https:\/\/valenslawfirm.com\/assets\/[^\/]+\/?$/.test(location.href) ||
        /^http:\/\/valenslawfirm.com\/assets\/[^\/]+\/?$/.test(location.href)) {
        window.location.href = 'https://valens-5694a.web.app/';
    }
}