export interface Memes {
    success: boolean;
    data:    Meme[];
}
export interface Meme {
    id:        string;
    name:      string;
    url:       string;
    width:     number;
    height:    number;
    box_count: number;
}
