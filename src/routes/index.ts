// criando rotas
import { Router } from "express";
//importando os controlles
import * as PageController from '../controllers/pageController';
import * as SearchController from '../controllers/searchController';

const router = Router();

//criando os endpointes (rotas)

router.get('/', PageController.home);
router.get('/dogs', PageController.dogs);
router.get('/cats', PageController.cats);
router.get('/fishes', PageController.fishes);


router.get('/search', SearchController.search);



// exportando todas as rotas
export default router;
