
        // Adjust height of sidebar based on the height of the accordion menu
        document.addEventListener('DOMContentLoaded', function () {
            var sidebar = document.getElementById('sidebar');
            var accordion = document.getElementById('accordionMenu');

            // Function to update sidebar height
            function updateSidebarHeight() {
                if (window.innerWidth < 992) { // Only apply on small screens
                    sidebar.style.height = accordion.scrollHeight + 'px';
                } else {
                    sidebar.style.height = 'auto'; // Default height for larger screens
                }
            }

            // Update height on window resize
            window.addEventListener('resize', updateSidebarHeight);

            // Initial height adjustment
            updateSidebarHeight();
        });
   