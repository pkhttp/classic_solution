import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Banner from './Banner';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Contact from './Contact';
import Products from './Products';
import Blog from './Blog';
import About from './About';
import Product_view from './Product_view';
import ProdCategory from './ProdCategory';
import HEALTH_FOOD from './HEALTH_FOOD';
import HEALTH_SUPPLEMENT from './HEALTH_SUPPLEMENT';
import AYURVEDA from './AYURVEDA';
import WATER_PURIFIRE from './WATER_PURIFIRE';
import AIR_PURIFIER from './AIR_PURIFIER';
import WOMEN_HYGEIN from './WOMEN_HYGEIN';
import ORAL_CARE from './ORAL_CARE';
import PERSONAL_CARE from './PERSONAL_CARE';
import AGRI_PRODUCTS from './AGRI_PRODUCTS';
import MACH_DRIVE from './MACH_DRIVE';

import MINERAL_DROP from './MINERAL_DROP';
import ENERGY_BOOSTER from './ENERGY_BOOSTER';
import VITAMIN_D_SPRAY from './VITAMIN_D_SPRAY';
import VITAMIN_C_SPRAY from './VITAMIN_C_SPRAY';
import VITAMIN_B12_SPRAY from './VITAMIN_B12_SPRAY';
import MULTIVITAMIN_SPRAY from './MULTIVITAMIN_SPRAY';
import VESTIGE_PRIME_MULTIVITAMIN from './VESTIGE_PRIME_MULTIVITAMIN';
import SEA_BUCKTHORN  from './SEA_BUCKTHORN';
import COMBIOTICS from './COMBIOTICS';
import KRILL_OIL from './KRILL_OIL';
import Q10 from './Q10';
import L_ARGININE from './L_ARGININE';
import PRE_GLUCOHEALTH from './PRE_GLUCOHEALTH';
import STEVIA from './STEVIA';
import CALCIUM from './CALCIUM';
import COLLAGEN from './COLLAGEN';
import GLUCOSAMINE from './GLUCOSAMINE';
import GLUCOSAMINE_2 from './GLUCOSAMINE_2';
import MELATONIN_ORAL_SPRAY from './MELATONIN_ORAL_SPRAY';
import DIETARY_FIBRE from './DIETARY_FIBRE';
import EYE_SUPPORT from './EYE_SUPPORT';
import FOOT_PATCH from './FOOT_PATCH';
import MANGO_SHAKE from './MANGO_SHAKE';
import VANILLA_SHAKE from './VANILLA_SHAKE';
import HMB from './HMB';
import PROTEIN_POWDER from './PROTEIN_POWDER';
import PROTEIN_POWDER_2 from './PROTEIN_POWDER_2';
import VESLIM_SHAKE from './VESLIM_SHAKE';
import VESLIM_TEA from './VESLIM_TEA';
import VESLIM from './VESLIM';
import HER_OWN from './HER_OWN';
import U_CONTROL from './U_CONTROL';
import HAIR_SKIN_NAIL from './HAIR_SKIN_NAIL';
import FOLIC_IRON from './FOLIC_IRON';
import CRANBERRY from './CRANBERRY';

import WATER_PURIFIRE_DETAIL from './WATER_PURIFIER_DETAIL';
import SHARP_PITCHER from './SHARP_PITCHER';

import AIR_PURIFIER_DETAIL from './AIR_PURIFIER_DETAIL';

import PANTY_LINERS from './PANTY_LINERS';
import SANITARY_NAPKIN from './SANITARY_NAPKIN';
import INTIMATE_WASH from './INTIMATE_WASH';

import MECH_DRIVE_TW from './MECH_DRIVE_TW';
import MECH_DRIVE_FW from './MECH_DRIVE_FW';

import DENTASSURE_TOOTH_BRUSH from './DENTASSURE_TOOTH_BRUSH';
import DENTASSURE_TOOTHPASTE from './DENTASSURE_TOOTHPASTE';
import GANO_TOOTHPASTE from './GANO_TOOTHPASTE';
import WHITENING_TOOTHPASTE from './WHITENING_TOOTHPASTE';
import MOUTH_WASH from './MOUTH_WASH';

import ZETA_SPECIAL_TEA from './ZETA_SPECIAL_TEA';
import NUTRITIONAL_PROTEIN_POWDER from './NUTRITIONAL_PROTEIN_POWDER';
import NUTRITIONAL_PROTEIN from './NUTRITIONAL_PROTEIN';
import NUTRITIONAL_PROTEIN_2 from './NUTRITIONAL_PROTEIN_2';
import FRESHNUP_DRINK from './FRESHUP_DRINK';
import PROTEIN_SNAK_BAR from './PROTEIN_SNAK_BAR';
import ENERGY_SNACK_BAR from './ENERGY_SNACK_BAR';
import BREAKFAST_CEREAL from './BREAKFAST_CEREAL';
import CHOCO_FLAXSEED_BAR from './CHOCO_FLAXSEED_BAR';
import RICE_BRAN_OIL from './RICE_BRAN_OIL';
import ZETA_COFFEE from './ZETA_COFFEE';
import SPICE_TEA from './SPICE_TEA';

import COLOUR_PROTECT_SHAMPOO from './COLOUR_PROTECT_SHAMPOO';
import DAMAGE_PROTECTION_HAIR_SERUM from './DAMAGE_PROTECTION_HAIR_SERUM';
import RINSE_OFF_CONDITIONER from './RINSE_OFF_CONDITIONER';
import ANTI_HAIR_FALL from './ANTI_HAIR_FALL';
import SMOOTHENING_SHAMPOO from './SMOOTHENING_SHAMPOO';
import HAIR_SPA from './HAIR_SPA';
import MOISTURE_RICH_SHAMPOO from './MOISTURE_RICH_SHAMPOO';
import DEEP_CLEANSE_SHAMPOO from './DEEP_CLEANSE_SHAMPOO';
import DAILY_CARE_SHAMPOO from './DAILY_CARE_SHAMPOO';
import HAIR_CONDITIONER from './HAIR_CONDITIONER';
import HAIR_OIL from './HAIR_OIL';
import INSTA_GLOW_FACIAL_KIT from './INSTA_GLOW_FACIAL_KIT';
import VITAMIN_C_FACIAL_FOAM from './VITAMIN_C_FACIAL_FOAM';
import C_GEL_CREME from './C_GEL_CREME';
import PURIFYING_CLEANSER_TONER from './PURIFYING_CLEANSER_TONER';
import DAILY_MOISTURISER from './DAILY_MOISTURISER';
import NIGHT_CREAM from './NIGHT_CREAM';
import BB_CREAM from './BB_CREAM';
import INSTANT_GLOW_FACE_PACK from './INSTANT_GLOW_FACE_PACK';
import CLARIFYING_FACE_WASH from './CLARIFYING_FACE_WASH';
import FAIRNESS_CREAM from './FAIRNESS_CREAM';
import SPF_30 from './SPF_30';
import GERM_PROTECTION_SOAP from './GERM_PROTECTION_SOAP';
import CLEASING_BAR from './CLEASING_BAR';
import ACTIVE_DEO_MEN from './ACTIVE_DEO_MEN';
import COMPLEXION_BAR from './COMPLEXION_BAR';
import RAPTURE_DEO from './RAPTURE_DEO';
import BODY_BUTTER from './BODY_BUTTER';
import SOAP from './SOAP';
import BODY_TALC from './BODY_TALC';
import ENCHANT_BODY_TALC from './ENCHANT_BODY_TALC';
import HAND_CLEANSING_GEL from './HAND_CLEANSING_GEL';
import HAND_CLEANSING_GEL_2 from './HAND_CLEANSING_GEL_2';
import BLOSSOM_PERFUME_SPRAY from './BLOSSOM_PERFUME_SPRAY';
import CAPTIVE_PERFUME_SPRAY from './CAPTIVE_PERFUME_SPRAY';
import CUCUMBER_AQUAGEL from './CUCUMBER_AQUAGEL';
import CHARISMA_PERFUME_SPRAY from './CHARISMA_PERFUME_SPRAY';
import HAND_WASH from './HAND_WASH';
import HAND_BODY_LOTION from './HAND_BODY_LOTION';
import FOOT_CREAM from './FOOT_CREAM';
import ARCTIC_PERFUME_SPRAY from './ARCTIC_PERFUME_SPRAY';
import AURA_PERFUME_SPRAY from './AURA_PERFUME_SPRAY';
import PULSE_PERFUME_SPRAY from './PULSE_PERFUME_SPRAY';
import RELIEF_CREAM from './RELIEF_CREAM';

import VESTIGE_NEEM from './VESTIGE_NEEM';
import HEALTH_DROPS from './HEALTH_DROPS';
import FLAX_OIL from './flax_oil';
import VESTIGE_ALOE_VERA from './VESTIGE_ALOE_VERA';
import VESTIGE_COLOSTRUM from './VESTIGE_COLOSTRUM';
import VESTIGE_AMLA from './VESTIGE_AMLA';
import VESTIGE_NOONI from './VESTIGE_NOONI';
import VESTIGE_SPIRULINA from './VESTIGE SPIRULINA';
import VESTIGE_GANODERMA from './VESTIGE_GANODERMA';
import VESTIGE_SHATAVARI_MAX from './VESTIGE_SHATAVARI_MAX';
import VESTIGE_CURCUMIN_PLUS from './VESTIGE_CURCUMIN_PLUS';
import AYUSANTE_PROSTATE_CARE from './AYUSANTE_PROSTATE_CARE';
import AYUSANTE_LIVERHEALTH from './AYUSANTE_LIVERHEALTH';
import AYUSANTE_RESPOCARE from './AYUSANTE_RESPOCARE';
import AYUSANTE_TOXCLEAN from './AYUSANTE_TOXCLEAN';
import AYUSANTE_GLUCOHEALTH from './AYUSANTE_GLUCOHEALTH';
import AYUSANTE_PROCARD from './AYUSANTE_PROCARD';
import AYUSANTE_CAPSULE from './AYUSANTE_CAPSULE';
import AYUSANTE_KIDNEYHEALTH from './AYUSANTE_KIDNEYHEALTH';

import AGRI_NANO from './AGRI_NANO';
import VESTIGE_AGRI_NANO from './VESTIGE_AGRI_NANO';
import AGRI_AQUAGEL from './AGRI_AQUAGEL';
import AGRI_GRANULES from './AGRI_GRANULES';
import AGRI_HUMIC from './AGRI_HUMIC';
import VESTIGE_AGRI_NANOTEK from './VESTIGE_AGRI_NANOTEK';
import VESTIGE_AGRI_PROTEK from './AGRI_PROTEK';
import VESTIGE_AGRI_82 from './VESTIGE_AGRI82';
import AGRI_VESTIGE from './AGRI_VESTIGE';
import VESTIGE_AGRI82_NANO from './VESTIGE_AGRI82_NANO';
import VESTIGE_AGRI82_5L from './VESTIGE_AGRI82_5L.js';
import VESTIGE_AGRI_PROTEAK from './AGRI_PROTEAK.js';
import VESTIGE_AGRI_MOSS from './VESTIGE_AGRI_MOSS.js';
import AGRI_NANOTEK from './AGRI_NANOTEK.js';
import AGRI_GOLDL from './AGRI_GOLDL.js';
import AGRI_MOSS from './AGRI_MOSS.js';

import VESTIGE_NONI_BLOG from './VESTIGE_NONI_BLOG.js';
import HYPERPIGMENTATION_BLOG from './HYPERPIGMENTATION_BLOG.js';
import HAIR_SERUM_BLOG from './HAIR_SERUM_BLOG.js';
import HER_OWN_CAPSULE_BLOG from './HER_OWN_CAPSULE_BLOG.js';
import PRIME_ENERGY_BOOSTER_BLOG from './PRIME_ENERGY_BOOSTER_BLOG.js';
import FOLIC_IRON_BLOG from './FOLIC_IRON_BLOG.js';
import AYUSANTE_GLUCOHEALTH_BLOG from './AYUSANTE_GLUCOHEALTH_BLOG.js';
import COLOSTUM_BLOG from './COLOSTUM_BLOG.js';
import CHERRY_BLOSSOM_BLOG from './CHERRY_BLOSSOM_BLOG.js';
import DETOX_FOOTPATCH from './DETOX_FOOTPATCH.js';
import HAIR_SKIN_NAIL_BLOG from './HAIR_SKIN_NAIL_BLOG.js';
import NATURAL_CREAM_BLOGS from './NATURAL_CREAM_BLOGS.js';
import RICE_OIL_BLOGS from './RICE_OIL_BLOG.js';
import PROTEIN_POWDER_BLOGS from './PROTEIN_POWDER_BLOGS.js';
import NATURAL_SUNSCREEN_BLOGS from './NATURAL_SUNSCREEN_BLOGS.js';
import BODY_BUTTER_BLOGS from './BODY_BUTTER_BLOGS.js';
import VESTINGE_SEABUCK_BLOGS from './VESTINGE_SEABUCK_BLOGS.js';
import VESTIGE_TEA_BLOGS from './VESTIGE_TEA_BLOGS.js';
import VESTIGE_EYE_SUPPORT_BLOGS from './VESTIGE_EYE_SUPPORT_BLOGS.js';
import VESTIGE_NIGHTCREAM_BLOGS from './VESTIGE_NIGHTCREAM_BLOGS.js';
import VESTIGE_INVIGO_BLOGS from './VESTIGE_INVIGO_BLOGS.js';
import VESTIGE_ARGININE_BLOGS from './VESTIGE_ARGININE_BLOGS.js';
import CALCIUM_CAPSULLE_BLOGS from './CALCIUM_CAPSULLE_BLOGS.js';
function App() {
  return (
    <div >
<BrowserRouter>
<Routes>

<Route path='/' element={<Banner/>}/>
<Route path='/About' element={<About/>}/>
<Route path='/Contact' element={<Contact/>}/>
<Route path='/Products' element={<Products/>}/>
<Route path='/Blog' element={<Blog/>}/>
<Route path='/prodCategory' element={<ProdCategory/>}/>
<Route path='/prodView' element={<Product_view/>}/>

<Route path='/healthSupplement' element={<HEALTH_SUPPLEMENT/>}/>
<Route path='/ayurveda' element={<AYURVEDA/>}/>
<Route path='/waterPurifire' element={<WATER_PURIFIRE/>}/>
<Route path='/airPurifire' element={<AIR_PURIFIER/>}/>
<Route path='/healthFood' element={<HEALTH_FOOD/>}/>
<Route path='/womenHygein' element={<WOMEN_HYGEIN/>}/>
<Route path='/oralCare' element={<ORAL_CARE/>}/>
<Route path='/personalCare' element={<PERSONAL_CARE/>}/>
<Route path='/agriProducts' element={<AGRI_PRODUCTS/>}/>
<Route path='/machDrive' element={<MACH_DRIVE/>}/>

<Route path='/mineralDrop' element={<MINERAL_DROP/>}/>
<Route path='/energyBooster' element={<ENERGY_BOOSTER/>}/>
<Route path='/vitaminDSpray' element={<VITAMIN_D_SPRAY/>}/>
<Route path='/vitaminCSpray' element={<VITAMIN_C_SPRAY/>}/>
<Route path='/vitaminB12Spray' element={<VITAMIN_B12_SPRAY/>}/>
<Route path='/multivitaminSpray' element={<MULTIVITAMIN_SPRAY/>}/>
<Route path='/vestigePrimeMultivitamin' element={<VESTIGE_PRIME_MULTIVITAMIN/>}/>
<Route path='/seabuckthorn' element={<SEA_BUCKTHORN/>}/>
<Route path='/combiotics' element={<COMBIOTICS/>}/>
<Route path='/krillOil' element={<KRILL_OIL/>}/>
<Route path='/q10' element={<Q10/>}/>
<Route path='/larginine' element={<L_ARGININE/>}/>
<Route path='/preglucohealth' element={<PRE_GLUCOHEALTH/>}/>
<Route path='/stevia' element={<STEVIA/>}/>
<Route path='/calcium' element={<CALCIUM/>}/>
<Route path='/collagen' element={<COLLAGEN/>}/>
<Route path='/glucosamine' element={<GLUCOSAMINE/>}/>
<Route path='/glucosamine2' element={<GLUCOSAMINE_2/>}/>
<Route path='/melatoninOralSpray' element={<MELATONIN_ORAL_SPRAY/>}/>
<Route path='/dietaryfibre' element={<DIETARY_FIBRE/>}/>
<Route path='/eyesupport' element={<EYE_SUPPORT/>}/>
<Route path='/footPatch' element={<FOOT_PATCH/>}/>
<Route path='/mangoshake' element={<MANGO_SHAKE/>}/>
<Route path='/vanillashake' element={<VANILLA_SHAKE/>}/>
<Route path='/hmb' element={<HMB/>}/>
<Route path='/proteinpowder' element={<PROTEIN_POWDER/>}/>
<Route path='/proteinpowder2' element={<PROTEIN_POWDER_2/>}/>
<Route path='/veslimshake' element={<VESLIM_SHAKE/>}/>
<Route path='/veslimtea' element={<VESLIM_TEA/>}/>
<Route path='/veslim' element={<VESLIM/>}/>
<Route path='/herown' element={<HER_OWN/>}/>
<Route path='/ucontrol' element={<U_CONTROL/>}/>
<Route path='/hairskinnail' element={<HAIR_SKIN_NAIL/>}/>
<Route path='/foliciron' element={<FOLIC_IRON/>}/>
<Route path='/cranberry' element={<CRANBERRY/>}/>

<Route path='/waterpurifierdetail' element={<WATER_PURIFIRE_DETAIL/>}/>
<Route path='/sharppitcher' element={<SHARP_PITCHER/>}/>

<Route path='/airpurifierdetail' element={<AIR_PURIFIER_DETAIL/>}/>

<Route path='/pantyliners' element={<PANTY_LINERS/>}/>
<Route path='/sanitarynapkin' element={<SANITARY_NAPKIN/>}/>
<Route path='/intimatewash' element={<INTIMATE_WASH/>}/>

<Route path='/mechdrivetw' element={<MECH_DRIVE_TW/>}/>
<Route path='/mechdrivefw' element={<MECH_DRIVE_FW/>}/>

<Route path='/dentassuretoothbrush' element={<DENTASSURE_TOOTH_BRUSH/>}/>
<Route path='/dentassuretoothpaste' element={<DENTASSURE_TOOTHPASTE/>}/>
<Route path='/ganotoothpaste' element={<GANO_TOOTHPASTE/>}/>
<Route path='/whiteningtoothpaste' element={<WHITENING_TOOTHPASTE/>}/>
<Route path='/mouthwash' element={<MOUTH_WASH/>}/>

<Route path='/zetaspecialtea' element={<ZETA_SPECIAL_TEA/>}/>
<Route path='/nutritionalproteinpowder' element={<NUTRITIONAL_PROTEIN_POWDER/>}/>
<Route path='/nutritionalprotien' element={<NUTRITIONAL_PROTEIN/>}/>
<Route path='/nutritionalprotein2' element={<NUTRITIONAL_PROTEIN_2/>}/>
<Route path='/freshupdrink' element={<FRESHNUP_DRINK/>}/>
<Route path='/proteinsnakbar' element={<PROTEIN_SNAK_BAR/>}/>
<Route path='/energysnackbar' element={<ENERGY_SNACK_BAR/>}/>
<Route path='/breakfastcereal' element={<BREAKFAST_CEREAL/>}/>
<Route path='/chocoflaxseedbar' element={<CHOCO_FLAXSEED_BAR/>}/>
<Route path='/ricebranoil' element={<RICE_BRAN_OIL/>}/>
<Route path='/zetacoffee' element={<ZETA_COFFEE/>}/>
<Route path='/spicetea' element={<SPICE_TEA/>}/>

<Route path='/colourprotectshampoo' element={<COLOUR_PROTECT_SHAMPOO/>}/>
<Route path='/demageprotectionhairserum' element={<DAMAGE_PROTECTION_HAIR_SERUM/>}/>
<Route path='/rinseoffconditioner' element={<RINSE_OFF_CONDITIONER/>}/>
<Route path='/antihairfall' element={<ANTI_HAIR_FALL/>}/>
<Route path='/smootheningshampoo' element={<SMOOTHENING_SHAMPOO/>}/>
<Route path='/hairspa' element={<HAIR_SPA/>}/>
<Route path='/moisturerichshampoo' element={<MOISTURE_RICH_SHAMPOO/>}/>
<Route path='/deepcleanseshampoo' element={<DEEP_CLEANSE_SHAMPOO/>}/>
<Route path='/dailycareshampoo' element={<DAILY_CARE_SHAMPOO/>}/>
<Route path='/hairconditioner' element={<HAIR_CONDITIONER/>}/>
<Route path='/hairoil' element={<HAIR_OIL/>}/>
<Route path='/instaglowfacialkit' element={<INSTA_GLOW_FACIAL_KIT/>}/>
<Route path='/facialkit' element={<VITAMIN_C_FACIAL_FOAM/>}/>
<Route path='/cgelcream' element={<C_GEL_CREME/>}/>
<Route path='/cleansertoner' element={<PURIFYING_CLEANSER_TONER/>}/>
<Route path='/dailymoisturiser' element={<DAILY_MOISTURISER/>}/>
<Route path='/nightcream' element={<NIGHT_CREAM/>}/>
<Route path='/bbcream' element={<BB_CREAM/>}/>
<Route path='/instantglow' element={<INSTANT_GLOW_FACE_PACK/>}/>
<Route path='/facewash' element={<CLARIFYING_FACE_WASH/>}/>
<Route path='/fairnesscream' element={<FAIRNESS_CREAM/>}/>
<Route path='/spf30' element={<SPF_30/>}/>
<Route path='/germprotection' element={<GERM_PROTECTION_SOAP/>}/>
<Route path='/cleansingbar' element={<CLEASING_BAR/>}/>
<Route path='/activedeomen' element={<ACTIVE_DEO_MEN/>}/>
<Route path='/complexionbar' element={<COMPLEXION_BAR/>}/>
<Route path='/repturedeo' element={<RAPTURE_DEO/>}/>
<Route path='/bodybutter' element={<BODY_BUTTER/>}/>
<Route path='/soap' element={<SOAP/>}/>
<Route path='/bodytalc' element={<BODY_TALC/>}/>
<Route path='/enchanttalc' element={<ENCHANT_BODY_TALC/>}/>
<Route path='/handcleaninggel' element={<HAND_CLEANSING_GEL/>}/>
<Route path='/handcleaninggel2' element={<HAND_CLEANSING_GEL_2/>}/>
<Route path='/blossomspray' element={<BLOSSOM_PERFUME_SPRAY/>}/>
<Route path='/captivespray' element={<CAPTIVE_PERFUME_SPRAY/>}/>
<Route path='/cucumberaquagel' element={<CUCUMBER_AQUAGEL/>}/>
<Route path='/charismaspray' element={<CHARISMA_PERFUME_SPRAY/>}/>
<Route path='/handwash' element={<HAND_WASH/>}/>
<Route path='/handlotion' element={<HAND_BODY_LOTION/>}/>
<Route path='/footcream' element={<FOOT_CREAM/>}/>
<Route path='/arcticspray' element={<ARCTIC_PERFUME_SPRAY/>}/>
<Route path='/auraspray' element={<AURA_PERFUME_SPRAY/>}/>
<Route path='/pulsespray' element={<PULSE_PERFUME_SPRAY/>}/>
<Route path='/reliefcream' element={<RELIEF_CREAM/>}/>

<Route path='/vestigeneem' element={<VESTIGE_NEEM/>}/>
<Route path='/healthdrops' element={<HEALTH_DROPS/>}/>
<Route path='/flaxoil' element={<FLAX_OIL/>}/>
<Route path='/vestigealoovera' element={<VESTIGE_ALOE_VERA/>}/>
<Route path='/vestigeamla' element={<VESTIGE_AMLA/>}/>
<Route path='/vestigecolostrum' element ={<VESTIGE_COLOSTRUM/>}/>
<Route path='/vestigenooni' element ={<VESTIGE_NOONI/>}/>
<Route path='/vestigespirulina' element ={<VESTIGE_SPIRULINA/>}/>
<Route path='/vestigeganoderma' element ={<VESTIGE_GANODERMA/>}/>
<Route path='/vestigeshatavarimax' element ={<VESTIGE_SHATAVARI_MAX/>}/>
<Route path='/vestigecurcumnplus' element ={<VESTIGE_CURCUMIN_PLUS/>}/>
<Route path='/ayusanteprostatecare' element ={<AYUSANTE_PROSTATE_CARE/>}/>
<Route path='/ayusanteliverhealth' element ={<AYUSANTE_LIVERHEALTH/>}/>
<Route path='/ayusanterespocare' element ={<AYUSANTE_RESPOCARE/>}/>
<Route path='/ayusantetoxclean' element ={<AYUSANTE_TOXCLEAN/>}/>
<Route path='/ayusanteglucohealth' element ={<AYUSANTE_GLUCOHEALTH/>}/>
<Route path='/ayusanteprocard' element ={<AYUSANTE_PROCARD/>}/>
<Route path='/ayusantecapsule' element ={<AYUSANTE_CAPSULE/>}/>
<Route path='/ayusantekidneyhealth' element ={<AYUSANTE_KIDNEYHEALTH/>}/>

<Route path='/agrinano' element ={<AGRI_NANO/>}/>
<Route path='/vestigeagrinano' element ={<VESTIGE_AGRI_NANO/>}/>
<Route path='/agriaquagel' element ={<AGRI_AQUAGEL/>}/>
<Route path='/agrigranules' element ={<AGRI_GRANULES/>}/>
<Route path='/agrihumic' element ={<AGRI_HUMIC/>}/>
<Route path='/agrinanotek' element ={<VESTIGE_AGRI_NANOTEK/>}/>
<Route path='/agriprotek' element ={<VESTIGE_AGRI_PROTEK/>}/>
<Route path='/vestigeagri' element ={<VESTIGE_AGRI_82/>}/>
<Route path='/vestigeagri82' element ={<AGRI_VESTIGE/>}/>
<Route path= '/Vestigenano' element={<VESTIGE_AGRI82_NANO/>}/>
<Route path= '/Vestigenano5l' element={<VESTIGE_AGRI82_5L/>}/>
<Route path='/agriproteak' element ={<VESTIGE_AGRI_PROTEAK/>}/>
<Route path='/vestigemoss' element ={<VESTIGE_AGRI_MOSS/>}/>
<Route path='/nanotek' element ={<AGRI_NANOTEK/>}/>
<Route path='/agrigold' element ={<AGRI_GOLDL/>}/>
<Route path='/agrimoss' element ={<AGRI_MOSS/>}/>

<Route path='/noniblog' element={<VESTIGE_NONI_BLOG/>}/>
<Route path='/hyperpigmentation' element={<HYPERPIGMENTATION_BLOG/>}/>
<Route path='/hairserum' element={<HAIR_SERUM_BLOG/>}/>
<Route path='/herownblog' element={<HER_OWN_CAPSULE_BLOG/>}/>
<Route path='/primeenergyboosterblog' element={<PRIME_ENERGY_BOOSTER_BLOG/>}/>
<Route path='/folicironblog' element={<FOLIC_IRON_BLOG/>}/>
<Route path='/glucohealthblog' element={<AYUSANTE_GLUCOHEALTH_BLOG/>}/>
<Route path='/colostrumblog' element={<COLOSTUM_BLOG/>}/>
<Route path='/cherryblossom' element={<CHERRY_BLOSSOM_BLOG/>}/>
<Route path='/detoxfootpatch' element={<DETOX_FOOTPATCH/>}/>
<Route path='/hairblog' element={<HAIR_SKIN_NAIL_BLOG/>}/>
<Route path='/naturalcreamblogs' element ={<NATURAL_CREAM_BLOGS/>}/>
<Route path='/ricesblogs' element ={<RICE_OIL_BLOGS/>}/>
<Route path="/proteinpowderblogs" element={<PROTEIN_POWDER_BLOGS/>}/>
<Route path="/sunscreenblogs" element={<NATURAL_SUNSCREEN_BLOGS/>}/>
<Route path="/bodybutterblogs" element={<BODY_BUTTER_BLOGS/>}/>
<Route path="/seabuckblogs" element={<VESTINGE_SEABUCK_BLOGS/>}/>
<Route path="/teablogs" element={<VESTIGE_TEA_BLOGS/>}/>
<Route path="/eyesupportblogs" element={<VESTIGE_EYE_SUPPORT_BLOGS/>}/>
<Route path="/nightcreamblogs" element={<VESTIGE_NIGHTCREAM_BLOGS/>}/>
<Route path="/invigopowder" element={<VESTIGE_INVIGO_BLOGS/>}/>
<Route path="/arginineblogs" element={<VESTIGE_ARGININE_BLOGS/>}/>
<Route path="/calciumblogs" element={<CALCIUM_CAPSULLE_BLOGS/>}/>








</Routes>

</BrowserRouter>

      


    </div>
  );
}

export default App;
