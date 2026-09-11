/* ==========================================================================
   Shop Notes — Client-side Filtering
   ========================================================================== */

(function () {
  'use strict';

  var pills = document.querySelectorAll('.pill');
  var categoryGroups = document.querySelectorAll('.category-group');

  if (!pills.length || !categoryGroups.length) return;

  pills.forEach(function (pill) {
    pill.addEventListener('click', function () {
      // Update active pill
      pills.forEach(function (p) { p.classList.remove('active'); });
      pill.classList.add('active');

      var filter = pill.getAttribute('data-filter');

      // Show / hide category groups
      categoryGroups.forEach(function (group) {
        if (filter === 'all' || group.getAttribute('data-category') === filter) {
          group.classList.remove('hidden');
        } else {
          group.classList.add('hidden');
        }
      });
    });
  });
})();
