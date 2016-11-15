import {Component, AfterViewInit, Input, ChangeDetectionStrategy} from '@angular/core';
import {WpQueryArgs, WpService, CollectionResponse} from "ng2-wp-api";

@Component({
  selector: 'related',
  templateUrl: 'related.component.html',
  styleUrls: ['related.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RelatedComponent implements AfterViewInit {

  @Input() tags: any;
  @Input() postId: string;
  posts;

  flickityOptions;

  constructor(private wpService: WpService) {
  }

  ngAfterViewInit() {

    this.flickityOptions = {
      contain: true,
      prevNextButtons: false
    };

    if (!this.postId) {
      console.warn("[Related Posts]: Please provide postId");
      return;
    }
    if (this.tags.length < 1) {
      console.warn("[Related Posts]: current post has no related posts.");
      return;
    }
    /** extract only tags names to tagNames */
    let tagNames = [];
    this.tags.map(tag=> {
      tagNames.push(tag.slug);
    });

    let args = new WpQueryArgs({
      filter: {
        tag: tagNames.toString(),
        post__not_in: [this.postId]
      },
      _embed: true
    });

    this.wpService.collection().posts().get(args).subscribe(
      (res: CollectionResponse)=> {
        this.posts = res.data;
      }
    );
  }

}
