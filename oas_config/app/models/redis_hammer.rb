class RedisHammer
  attr_accessor :connection
  def initialize
    @connection = Redis.new url: Rails.configuration.redis_url
  end

  def smash(options={})
    if options[:account].present? && options[:model].present?
      if options[:id]
        @namespace = Redis::Namespace.new options[:account].to_sym, redis: @connection
        keys = @namespace.keys "*#{options[:model]}:find:#{options[:id]}*"
        keys.each do |k|
          @namespace.send('del', k)
        end
      else
        @namespace = Redis::Namespace.new options[:account].to_sym, redis: @connection
        keys = @namespace.keys "*#{options[:model]}:all*"
        keys.each do |k|
          @namespace.send('del', k)
        end
      end
    else
      raise(ArgumentError, "You need both an account and model to smash caches")
    end
  end

  def smash_all(organization)
    if organization.present?
      @namespace = Redis::Namespace.new organization.to_sym, redis: @connection
      @namespace.keys.each do |k|
        @namespace.send('del', k)
      end
      "smash all for #{organization} success"
    else
      raise(ArgumentError, "You need to specify an organization code to smash the cache.")
    end
  end
end
