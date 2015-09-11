require 'sinatra'
require 'json'

get '/' do
  send_file 'public/index.html'
end

get '/key' do
  { access_token: ENV["GIT_USER_SEARCH_TOKEN"] }.to_json
end
