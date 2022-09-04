import { Injectable } from '@angular/core';

export interface CardData {
    title: string;
    avatarUrl: string;
    cardText: string;
    likeCount: number;
    createdDate: string;
}

@Injectable({ providedIn: 'root' })
export class HomeService {

    private data: CardData[] = [{
        title: 'John Doe',
        avatarUrl: '../../assets/avatar.svg',
        cardText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis' +
            'non nesciunt assumenda odio ipsum quo molestias in quibusdam quos consequatur. Assumenda molestiae temporibus voluptatem,' +
            'cumque aut libero quos ex, sapiente hic veritatis aliquid! Ad, fugiat officiis. Magnam autem placeat voluptatem error l' +
            ' amet suscipit, et nostrum eum recusandae dicta repudiandae id dolorum, officiis vitae, ea fugiat iure aliquid ad earum.' +
            'autem aliquam sint fuga consequatur illo? Repellat dolorum hic quae, numquam aspernatur laborum ad et dolores laboriosam ' +
            'aut voluptates illo iusto saepe minus eligendi nisi distinctio! Dignissimos necessitatibus repudiandae praesentium',
        likeCount: 1,
        createdDate: '5 days ago'
    }];

    getCardData(): CardData[] {
        return this.data;
    }
}
