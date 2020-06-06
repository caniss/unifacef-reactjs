import { configureScope, init} from "@sentry/browser";

(()=> {
    //desativa o plugin local host
    if(window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1') {
        return;        
    }
    init({dsn: "https://8778c5d9bc564e619a7874d459cb8e04@o403740.ingest.sentry.io/5266718"});
    
    configureScope(scope => {
        
    })
})();
