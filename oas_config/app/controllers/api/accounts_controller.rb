module Api
  class AccountsController < Api::BaseApiController

    def show
      if params[:search_by_org_code]
        @account = Account.find_by_org_code params[:id]
      else
        @account = Account.find params[:id]
      end

      @result = {
        account: @account
      }
      @result[:assets] = @account.asset_lists if params[:include_assets]

      render json: @result.to_json
    end

    def update
      super
      if params[:account][:asset_lists]
        @account.asset_list_ids = params[:account][:asset_lists]
        @account.save
      end
    end

    def account_params
      params.require(:account).permit(:org_code, :api_key, :google_analytics_key, :google_search_key, :dfp_path_prefix, :ooyala_ad_set_codes, :ooyala_video_player_id, :ooyala_audio_player_id, :platform_name, :copyright, :publication_name, :amp_endpoint_url)
    end
  end
end
