import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AudioPlayService } from 'src/app/services/audio-play.service';
import { DetailedContentsService } from 'src/app/services/detailed-contents.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'app-user-view-detailedcon',
  templateUrl: './user-view-detailedcon.component.html',
  styleUrls: ['./user-view-detailedcon.component.css'],
})
export class UserViewDetailedconComponent implements OnInit {
  conId: any;
  qTitle: any;
  detailedcontents: {
    detailedConId: number;
    description: string;
    title: string;
    dc_link: string;
    dc_imageUrl: string;
    dc_audioPath: string;
    dc_imageFile: any; // Adjust the type as per your MultipartFile structure
    dc_audioFile: any;
  }[] = [];

  currentPage = 1;
  itemsPerPage = 3;
  audioPlayers: Map<number, HTMLAudioElement> = new Map();

  //audioPlayer: HTMLAudioElement | undefined;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _detailedcontent: DetailedContentsService,
    private _snack: MatSnackBar,
    private _audio_play: AudioPlayService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.conId = this._route.snapshot.params['conId'];
    this.qTitle = this._route.snapshot.params['title'];
    // console.log(this.qId);
    // console.log(this.qTitle);
    this._detailedcontent.getDetailedContentsOfContent(this.conId).subscribe(
      (data: any) => {
        // console.log(data);
        this.detailedcontents = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  nextPage() {
    this.currentPage++;
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  // playAudio(audioPath: string): void {
  //   const audio = new Audio(audioPath);
  //   audio.play();
  // }

  playAudio(detailedConId: any): void {
    //console.log('DetailedConId:', detailedConId);

    // If there is already an audio player instance for this detailed content, stop it
    this.stopAudio(detailedConId);

    this._audio_play.getAudioFile(detailedConId).subscribe(
      (audioBlob: Blob) => {
        // Create a new audio player instance
        const audioPlayer = new Audio(URL.createObjectURL(audioBlob));
        audioPlayer.play();

        // Store the audio player instance in the Map
        this.audioPlayers.set(detailedConId, audioPlayer);
      },
      (error) => {
        console.log(error);
        // Handle error (display a message or show a Snackbar)
      }
    );
  }

  stopAudio(detailedConId: any): void {
    if (detailedConId && this.audioPlayers.has(detailedConId)) {
      // If there is an audio player instance for this detailed content, stop it
      const audioPlayer = this.audioPlayers.get(detailedConId);
      if (audioPlayer) {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
        // Remove the audio player instance from the Map
        this.audioPlayers.delete(detailedConId);
      }
    } else {
      // If no detailedConId provided, stop all audio players
      this.audioPlayers.forEach((player) => {
        player.pause();
        player.currentTime = 0;
      });
      // Clear the Map
      this.audioPlayers.clear();
    }
  }
  sanitizeDescription(description: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(description);
  }

  // viewFullDescription(detailedConId: any): void {
  //   Redirect to full-description component with detailedConId
  //   this._router.navigate(['/admin/full-description', detailedConId]);
  // }

  openLinkInNewWindow(url: string): void {
    if (url) {
      window.open(url, '_blank');
    }
  }
}
