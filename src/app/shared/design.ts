// function myFunction() {
//     // Get the snackbar DIV
//     var x = document.getElementById("snackbar");

//     // Add the "show" class to DIV
//     x.className = "show";

//     // After 3 seconds, remove the show class from DIV
//     setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
// }

// export function ShowSnackbar(action: string, type: string) {
// 	let classToShow = 'snackbar-';

// 	switch (action) {
// 		case 'save':
// 			classToShow += 'save-';
// 			switch (type) {
// 				case 'success':
// 					classToShow += 'success';
// 					break;
// 				case 'fail':
// 					break;
// 				default:
// 					break;
// 			}
// 			break;
// 		case 'delete':
// 			break;
// 		default:
// 			break;
// 	}

// 	classToShow += ' show';

// 	return classToShow;
// }
