class ApplicationController < ActionController::Base
  before_action :authenticate_user!
  before_action :configure_permitted_parameters, if: :devise_controller?

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
  end

  def after_sign_up_path_for(resource)
    stored_location_for(resource) || games_path
  end

  def after_sign_in_path_for(resource)
    stored_location_for(resource) || games_path
  end
end