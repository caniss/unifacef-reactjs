import {home } from '../containers/home/store';
import {combustivel} from '../containers/combustiveis/store';
import {router} from './router.store';
import {starWars} from '../containers/star-wars/store';
import { starWarsDetails } from '../containers/star-wars-details/store';
import { cache } from '../containers/cache/store';
import { tags } from '../containers/tags/store';
import {register} from '../containers/register/store'

export {
    router,
    combustivel,
    home,
    starWars,
    starWarsDetails,
    cache,
    tags,
    register
}