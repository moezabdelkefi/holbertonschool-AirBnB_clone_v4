$(document).ready(function() {
    const amenitiesDict = {};
    
    $('input[type="checkbox"]').change(function() { // Listen for changes on each input checkbox tag
      const amenityId = $(this).attr('data-id'); // Get Amenity ID from the DOM
      const amenityName = $(this).attr('data-name'); // Get Amenity name from the DOM
      
      if ($(this).is(':checked')) { // If the checkbox is checked
        amenitiesDict[amenityId] = amenityName; // Store the Amenity ID in the dictionary
      } else { // If the checkbox is unchecked
        delete amenitiesDict[amenityId]; // Remove the Amenity ID from the dictionary
      }
      
      // Update the h4 tag inside the div Amenities with the list of Amenities checked
      $('.amenities h4').html(Object.values(amenitiesDict).join(', '));
    });
  });
