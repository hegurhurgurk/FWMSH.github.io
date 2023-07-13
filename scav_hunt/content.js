let title_content = `
    <img src='Building.jpg' style='width:100%;'>
    <h3>Scavenger Hunt</h3>
    Our galleries are full of cool facts and amazing ideas. Can you find the answers to these questions?
`

function buildQuiz() {

  // Add the questions

  createHeader('General');
  createMultiChoice('Of which state is <i>Paluxysaurus</i> the official dinosaur?', ['Oklahoma', 'New Mexico', 'Texas'], 'Texas');
  createMultiChoice('<i>Paluxysaurus jonesi</i> is a _______ , a class of dinosaur that eats plants, has a long neck and tail, a small head, and walks on all four legs.', ['Carnivore', 'Herbivore', 'Omnivore'], 'Herbivore');
  createMultiChoice('A painting called "A River Runs Through It" by local artist Cindi Holt is located outside of the Museum'+"'"+'s Oak Rooms East and West. What well-known Museum mascot is featured in the painting?', ['Museum Bear', 'Museum School Turtle', 'Museum Lizard'], 'Museum School Turtle');
  createMultiChoice('Where can the Heritage Tree be found? This tree was left from the original Museum building on this site.  The tree was left undisturbed and the building that you stand in today was designed and constructed around it.', ['The Oak Room', 'Stars Cafe', 'The courtyard'], 'The courtyard');
 
  createHeader('Energy Blast');
  createMultiChoice("Which technology generates the most electricity in Texas?", ['Nuclear', 'Wind', 'Natural Gas', 'Solar'], 'Natural Gas');
  createMultiChoice("Which of these energy sources does not provide steady, consistent power?", ['Coal', 'Wind', 'Nuclear'], 'Wind');
  createMultiChoice("Which of these energy sources is not considered renewable energy?", ['Solar', 'Wind', 'Nuclear', "Hydroelectric"], 'Nuclear');

  createHeader('<i>Dino Labs</i>');
  createMultiChoice('What is the name of bone #12?', ['Dorsal Vertebrae', 'Sacral Vertebrae', 'Cervical Vertebrae','Caudal Vertebrae'], 'Dorsal Vertebrae');
  createMultiChoice("What was the top predatory dinosaur during the late Jurassic Period??", ['Tyrannosaurus Rex', 'Allosaurus', 'Triceratops', 'Velociraptor'], 'Allosaurus');

  createHeader('<i>Plains Cultures Gallery</i>');
  createMultiChoice("10. How many acres is the Great Plains?", ['10,000 acres', '12 million acres', '500,000 acres','180 million acres'], '180 million acres');
  createMultiChoice('Which Native American tribe resided in DFW area?', ['Wichita', 'Comanche', 'Caddo','Jumano'], 'Wichita');

  createHeader('<i>The Unexpected City</i>');
  createMultiChoice('What year was Jimmy Stewart named an honorary Texan?', ['1945', '1972', '1956','2001'], '1956');
  createMultiChoice("What animal is Jimmy Stewart feeding/petting?", ['Cow', 'Rhino', 'Horse'], 'Rhino');

  createHeader('<i>Cattle Raisers Museum</i>');
  createMultiChoice("When did Texas officially become a US state?", ['1824', '1935', '1845','1900'], '1845');
  createMultiChoice("How many saddles are on display?", ['6', '8', '10'], '10');
 

  createHeader('<i>9/11 Tribute</i>');
  createMultiChoice("How much does the artifact weigh?", ['2 tons', '1,000 lbs', '10,000 lbs', '4 tons'], '4 tons');

  createHeader('Planetarium Gallery');
  createMultiChoice("What club did Charlie Mary Noble organize?", ['The Space Kids Club', 'Stars and Planets Club', 'Junior Astronomer'+"'"+'s Club', 'Galaxy Club'], 'Junior Astronomer'+"'"+'s Club');
  createMultiChoice("18. How many tons of space debris hits earth every day?", ['5 tons', '100 tons', '1 ton','500 tons'], '100 tons');
  createMultiChoice("What is "+'"'+"Mr. Meteorite's"+'"'+" real name?",['Oscar Monnig','Isaac Moon','Oliver James','Caeser Meteor'],'Oscar Monnig');
 
 createHeader('<i>The Charlie Brown Exhibit</i>');
 ("What was Charlie Schulz's nickname?",['Shorty','Snoopy','Sparky','Speedy','(it is after August 20, 2023)'],['Sparky','(it is after August 20, 2023)']);
 ("How many Christmas trees are on display?",['5','3','6','12','(it is after August 20, 2023)'],['5','(it is after August 20, 2023)']);

createHeader('<i>Innovation Studios</i>')
 ("What object do you put into the air tube?",['Confetti','Paper cups','Candy','Paper plates'],'Paper cups');
 ("What activities are there to do in the Innovation Studios?",['Drawing','Dino biome','Slide','Tornado replicator','Bed of nails','Pool','Bubble machine'],['Drawing','Dino biome','Tornado replicator','Bed of nails']);
  //template
  // createMultiChoice("",['','','',''],'');

 
  createPaddingBlock();









}
