/**
 * Serene Seasons - Crop Season Tags
 * 
 * Defines which seasons each crop can be grown in
 * Serene Seasons adds seasonal mechanics to Minecraft
 * 
 * Available seasons: spring, summer, autumn, winter
 * 
 * Tag format: sereneseasons:spring_crops, sereneseasons:summer_crops, etc.
 */

ServerEvents.tags('item', event => {
  // ============================================================================
  // SPRING CROPS (Spring - Warm season)
  // ============================================================================
  
  event.add('sereneseasons:spring_crops', [
    
  ]);

  // ============================================================================
  // SUMMER CROPS (Summer - Hot season)
  // ============================================================================
  
  event.add('sereneseasons:summer_crops', [
  
  ]);

  // ============================================================================
  // AUTUMN CROPS (Autumn - Cool season)
  // ============================================================================
  
  event.add('sereneseasons:autumn_crops', [
  
  ]);

  // ============================================================================
  // WINTER CROPS (Winter - Cold season)
  // ============================================================================
  
  event.add('sereneseasons:winter_crops', [
  
  ]);

  // ============================================================================
  // YEAR-ROUND CROPS (Grows in all seasons)
  // ============================================================================
  
  event.add('sereneseasons:year_round_crops', [
  
  ]);
});
