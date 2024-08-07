import {Component, OnInit} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import 'dotenv/config';
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

@Component({
  selector: 'js-contact',
  standalone: true,
  imports: [
    MatIcon,
    MatFormField,
    MatHint,
    MatLabel,
    MatInput,
    ReactiveFormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  private mails: {
    subject: string,
    from: string,
    body: { firstName: string, lastName: string, message: string }
  }[] = [];
  contactForm = new FormBuilder().group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) {
  }

  ngOnInit() {

  }

  async submit() {
    if (this.isFormValid()) {
      // const emailBody = `FROM:\t${this.contactForm.get('email')}\n
      // FIRSTNAME:\t${this.contactForm.get('firstName')}\n
      // LASTNAME:\t${this.contactForm.get('firstName')}\n\n
      // MESSAGE:\t${this.contactForm.get('message')}
      // `;
      // const emailUrl = `mailto:jeroen.smissaert@hotmail.com?subject=Contact From WebFolio &body=${emailBody}`;
      // this.httpClient.get(emailUrl);

      //Temp save to object
      // const mailBody = {
      //   firstName: this.firstName,
      //   lastName: this.lastName,
      //   message: this.message
      // }
      //
      // const mail = {
      //   subject: 'Contact From smisrt.be',
      //   from: this.email,
      //   body: mailBody
      // }
      //
      // //save mail to array
      // this.mails.push(mail);

      const mailerSend = new MailerSend({
        apiKey: 'mlsn.0fe7436810aca321514866aecdcf44e46cee6d6cbfb377524652ba9fcb466505',
      });

      const sentFrom = new Sender(this.email, `${this.firstName} ${this.lastName}`);

      const recipients = [
        new Recipient("jeroen.smissaert@gmail.com", "Jeroen Smissaert")
      ];

      const emailParams = new EmailParams()
        .setFrom(sentFrom)
        .setTo(recipients)
        .setReplyTo(sentFrom)
        .setSubject('Contact From smisrt.be')
        .setHtml(`<strong>${this.message}</strong>`)
        .setText(`${this.message}`);

      await mailerSend.email.send(emailParams);
    }

  }

  isFormValid(): boolean {
    this.contactForm.markAsDirty();

    if (this.contactForm.get('firstName')?.valid) {
      document.body.querySelector('#firstname-input')!.classList.add('was-validated');
    } else {
      document.body.querySelector('#firstname-input')!.classList.remove('was-validated');
    }

    if (this.contactForm.get('lastName')?.valid) {
      document.body.querySelector('#lastname-input')!.classList.add('was-validated');
    } else {
      document.body.querySelector('#lastname-input')!.classList.remove('was-validated');
    }

    if (this.contactForm.get('email')?.valid) {
      document.body.querySelector('#email-input')!.classList.add('was-validated');
    } else {
      document.body.querySelector('#email-input')!.classList.remove('was-validated');
    }

    if (this.contactForm.get('message')?.valid) {
      document.body.querySelector('#message-input')!.classList.add('was-validated');
    } else {
      document.body.querySelector('#message-input')!.classList.remove('was-validated');
    }

    const formIsValid = this.contactForm.valid;

    if (formIsValid) {
      document.body.querySelector('#form-submit')!.classList.add('was-validated', 'submit');
    } else {
      document.body.querySelector('#form-submit')!.classList.remove('was-validated', 'submit');
    }
    return this.contactForm.valid;
  }

  get firstName(): string {
    return this.contactForm.get('firstName')?.value!;
  }

  get lastName(): string {
    return this.contactForm.get('lastName')?.value!;
  }

  get email(): string {
    return this.contactForm.get('email')?.value!;
  }

  get message(): string {
    return this.contactForm.get('message')?.value!;
  }

}
