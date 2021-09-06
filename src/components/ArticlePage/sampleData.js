import sample from "./sampleModel.svg";
import articleImage from "./articleImage.svg";
import office1 from "./../LandingPage/office.jpg";
import office2 from "./../LandingPage/office2.jpg";
import userImage from "./CommentImage.svg";

export const sampleData = {
	author: {
		name: "Author Name",
		designation: "Author Designation",
		avatar: sample,
		socialLinks: {
			facebook: "facebook-link",
			twitter: "twitter-link",
			linkedIn: "linkedin-link",
		},
	},
	like: { count: 100 },
	comment: {
		count: 10,
		topComments: [
			{
				author: {
					name: "Username",
					prefession: "",
					avatar: userImage,
				},
				body: "Lorem ipsum dolor sit amet. 33 voluptatem quod in voluptatem harum sed necessitatibus voluptatibus id Quis neque sed laborum tenetur vel sunt molestiae et quia itaque. Et dolorem enim vel minus consequatur cum laboriosam facilis et dolorem Quis non quasi.",
			},
			{
				author: {
					name: "Username",
					prefession: "",
					avatar: userImage,
				},
				body: "euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim.",
			},
		],
	},
	heading: "Text Title Goes Here",
	body: [
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent auctor sem et auctor molestie. Curabitur nisl sapien, lacinia eu auctor quis, imperdiet in sapien. Nulla suscipit dui sit amet lacus blandit, facilisis euismod mauris mollis. Suspendisse tempor eros in purus lobortis, id pulvinar diam placerat. Maecenas vehicula vestibulum egestas. Aenean non tortor ligula. Duis hendrerit metus ac blandit facilisis. Maecenas tempus felis id magna mattis ultrices.",
		"Vivamus imperdiet justo id rhoncus fringilla. Aliquam erat volutpat. Duis ultrices purus sem, vel vehicula magna fermentum et. Aliquam sed dolor et lectus ornare porta vel quis mi. Mauris nec aliquet est, sollicitudin luctus ipsum. Vivamus bibendum elit risus, nec suscipit orci rutrum quis. Donec nec venenatis quam.",
		"Pellentesque eu congue nisi, sit amet laoreet massa. Proin non laoreet orci. Morbi sed ipsum rutrum elit mattis vestibulum vel eget velit. Sed eros elit, finibus vitae leo id, sollicitudin bibendum dolor. Nulla nec gravida neque, vel elementum ligula. Fusce egestas lacinia est, in tristique neque viverra at. Aliquam vitae tempus urna. Praesent vitae commodo sapien, vel facilisis erat. Suspendisse feugiat ut tellus sed tincidunt. Ut ac ligula auctor, interdum magna in, vehicula felis. Sed sit amet enim vel felis vulputate tempor. Fusce nec ultrices dolor, nec ornare eros.",
		"Ut in ex a dolor auctor vulputate. Integer tellus dolor, auctor a erat at, ultricies imperdiet eros. Morbi at eros vestibulum, accumsan felis sed, pellentesque mauris. Nullam et sollicitudin nunc. Integer a convallis risus, vitae ullamcorper felis. Mauris dolor quam, convallis ac auctor in, ultricies quis mauris. Aliquam lacinia ligula ut placerat cursus. Praesent eget sem nec leo maximus dapibus.",
		"In et massa mi. Duis pellentesque tortor ex. Nunc non metus pellentesque enim pulvinar tristique. Sed diam massa, commodo at euismod a, vestibulum et libero. Duis ut felis vel purus suscipit tristique. Phasellus consectetur neque nec mi lacinia varius. Nullam vitae blandit odio. Praesent pulvinar turpis imperdiet, consequat ipsum congue, pharetra orci.",
	],
	image: articleImage,
	similarArticle: [
		{
			Articleid: "abc123",
			image: office1,
			heading: "heading",
			body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vehicula libero sit amet dignissim semper. Aenean eu lacus fermentum, pellentesque.",
		},
		{
			Articleid: "123abc",
			image: office2,
			heading: "heading",
			body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vehicula libero sit amet dignissim semper. Aenean eu lacus fermentum, pellentesque.",
		},
	],
	morefromAuthor: [
		{
			Articleid: "random1",
			heading: "heading",
			image: office1,
			body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vehicula libero sit amet dignissim semper. Aenean eu lacus fermentum, pellentesque.",
		},
		{
			Articleid: "random2",
			heading: "heading",
			image: office2,
			body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vehicula libero sit amet dignissim semper. Aenean eu lacus fermentum, pellentesque.",
		},
	],
};
