import React from 'react';
import {
  SendMailContainer,
  SendMailHeader,
  SendMailCloseIcon,
  SendMailForm,
  SendMailOptions,
  SendMailButton,
  ErrorMessage,
} from './styles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import validationSchema from './validationSchema';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from 'features/mailSlice';

const SendMail = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <SendMailContainer>
      <SendMailHeader>
        <h3>New Message</h3>
        <SendMailCloseIcon onClick={() => dispatch(closeSendMessage())} />
      </SendMailHeader>

      <SendMailForm onSubmit={handleSubmit(onSubmit)}>
        <input name="to" type="text" placeholder="To" {...register('to')} />
        <ErrorMessage>{errors.to?.message}</ErrorMessage>

        <input
          name="subject"
          type="text"
          placeholder="Subject"
          {...register('subject')}
        />
        <ErrorMessage>{errors.subject?.message}</ErrorMessage>

        <textarea
          name="message"
          type="text"
          placeholder="Message..."
          {...register('message')}
        ></textarea>
        <ErrorMessage>{errors.message?.message}</ErrorMessage>

        <SendMailOptions>
          <SendMailButton variant="contained" color="primary" type="submit">
            Send
          </SendMailButton>
        </SendMailOptions>
      </SendMailForm>
    </SendMailContainer>
  );
};

export default SendMail;
