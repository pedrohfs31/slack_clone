class ChatroomChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    def subscribed
      chatroom = Chatroom.find(params[:id])
      stream_for chatroom
    end
  end

  # nao vamos utilizar hoje!******
  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
