var ctaExit = "https://www.toyota.co.uk/new-cars/proace/proace-contract-hire-offer.json?utm_source=&utm_medium=display&utm_campaign=Q2_Proace_Fleet%20::%20Tactical%20::%20ConquestProace";

// If true, start function. If false, listen for INIT.
window.onload = function() {
  if (Enabler.isInitialized()) {
      enablerInitHandler();
  } else {
      Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
  }
}

function enablerInitHandler() {
  document.getElementById('Stage').addEventListener('click', bgExitHandler, false);
}

var bgExitHandler = function(e) { 
  Enabler.exitOverride('Background exit', ctaExit);
  return false;
}
