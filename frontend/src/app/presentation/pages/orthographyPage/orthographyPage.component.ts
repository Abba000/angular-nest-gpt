import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { TypingLoaderComponent, MyMessageComponent, ChatMessageComponent, TextMessageBoxComponent, TextMessageBoxFileComponent, TextMessageEvent, TextMessageBoxSelectComponent, TextMessageBoxEvent } from '@components/index';
import { Message } from '@interfaces/index';
import { OpenAiService } from '../../services/openai.service';

@Component({
  selector: 'app-orthography-page',
  imports: [
    CommonModule,
    ChatMessageComponent,
    MyMessageComponent,
    TypingLoaderComponent,
    //TextMessageBoxComponent,
    //TextMessageBoxFileComponent,
    TextMessageBoxSelectComponent
  ],
  templateUrl: './orthographyPage.component.html',
  styleUrls: ['./orthographyPage.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrthographyPageComponent { 

  public messages = signal<Message[]>([{text: 'Hola mundo', isGpt: false}]);
  public isLoading = signal(false);
  public openAiService = inject( OpenAiService )

  handleMessage(prompt: string) {
    console.log({prompt})
  }

  handleMessageWithFile( { prompt, file }: TextMessageEvent ) {
    console.log({ prompt, file });
  }

  handleMessageWithSelect( event: TextMessageBoxEvent ) {
    console.log(event);
  }
}
