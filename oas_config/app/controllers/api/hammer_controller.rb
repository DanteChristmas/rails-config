module Api
  class HammerController < BaseApiController
    def index
      if params[:model]
        model = check_model(params[:model])
        if model
          if model == "S3"
            # Rails.cache.delete_matched "*:S3:*"
            render text: "#{model} has been smashed."
          elsif model == "Account"
            response = smash_account params
            render text: response
          else
            # Rails.cache.delete_matched "*#{model}:all*"
            check_model_queries(model)
            render text: "#{model} has been smashed."
          end
        else
          raise(ArgumentError, "You have provided a nonsense model.")
        end
      else
        raise(ArgumentError, "You must provide a model.")
      end
    end

    def show
      if params[:model]
        model = check_model(params[:model])
        if model == "Account"
          response = smash_account params
          render text: response
        elsif model
          check_model_queries(model, params[:id])
          render text: "#{model} id: #{params[:id]} has been smashed."
        else
          raise(ArgumentError, "You have provided a nonsense model.")
        end
      else
        raise(ArgumentError, "You must provide a model.")
      end
    end

    def check_model(model)
      model = model.downcase
      result = false

      result = "Alias" if model == 'alias'
      result = "Article" if model == 'article'
      result = "Event" if model == 'event'
      result = "Group" if model == 'group'
      result = "Leaderboard" if model == 'leaderboard'
      result = "MediaChannel" if model == 'mediachannel' || model == 'media_channel' || model == 'media-channel'
      result = "Media" if model == 'media'
      result = "Person" if model == 'person'
      result = "School" if model == 'school'
      result = "Season" if model == 'season'
      result = "Show" if model == 'show'
      result = "Sport" if model == 'sport'
      result = "Standing" if model == 'standing'
      result = "Gallery" if model == 'gallery'
      result = "S3" if model == 's3'
      result = "Hero" if model == 'hero'
      result = "Account" if model == 'account'

      result
    end

    def check_model_queries(model, id=nil)
      if model == "Article"
        if id
          # article_slug = OasApi::Article.find(id).try(:[], :slug) || OasApi::Article.find_by_slug(id).try(:[], :slug)
          # Rails.cache.delete_matched "*#{model}:related_articles:#{id}*"
          # Rails.cache.delete_matched "*#{model}:find_by_slug:#{article_slug}*"
        else
          # Rails.cache.delete_matched "*#{model}:related_articles*"
        end
      elsif model == "Media"
        if id
          # Rails.cache.delete_matched "*#{model}:related:#{id}*"
        else
          # Rails.cache.delete_matched "*#{model}:related*"
        end
      elsif model == "Account"
        #  OasConfig::Account.system_account ({force: true, include_gulp_config: true})
      end
    end

    def smash_account(params)
      if params[:id].present?
        @account = Account.find params[:id]
        if @account.full_cache_bust
          @account.full_cache_bust = false
          @account.save!
          RedisHammer.new.smash_all @account.org_code
        else
          RedisHammer.new.smash({account: @account.org_code, model: "Account", id: @account.org_code})
        end
      else
        raise(ArgumentError, "you must provide and org_code to destroy an account")
      end
    end
  end
end
