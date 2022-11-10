import { Diary } from './../model/Diary';


// get diaries by page
export async function getDiaryPaging(pageIndex: number, pageSize: number = 8){
    // fake api call
    var response: Diary[] = [];
    var description = `私の日記の記録が一部表示されます。
    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…`;
    for (let index = 0; index < pageSize; index++) {
        response.push(new Diary(new Date(), description));
    }
    return response;
}